import React, {
  useRef,
  useLayoutEffect,
  startTransition,
  unstable_startGestureTransition as startGestureTransition,
  addTransitionType,
} from "react";

// @ts-ignore
import { SwipeToDismissTransitionType } from "./transitions.module.css";

type CancelGesture = () => {};

// Example of a Component that can recognize swipe gestures using a ScrollTimeline
// without scrolling its own content. Allowing it to be used as an inert gesture
// recognizer to drive a View Transition.
export default function SwipeToDismiss({
  action,
  children,
  direction,
  gesture,
}: {
  action: () => void;
  gesture: () => void;
  direction?: "left" | "right" | "up" | "down";
  children: React.ReactNode;
}) {
  if (direction == null) {
    direction = "right";
  }
  const axis = direction === "left" || direction === "right" ? "x" : "y";

  const scrollRef = useRef<HTMLDivElement>(null);
  const dismissRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const activeGestureRef = useRef<CancelGesture>(null);

  function onScroll() {
    if (activeGestureRef.current !== null) {
      return;
    }

    // @ts-ignore
    const scrollTimeline = new ScrollTimeline({
      source: scrollRef.current,
      axis: axis,
    });
    // @ts-ignore
    activeGestureRef.current = startGestureTransition(
      scrollTimeline,
      () => {
        addTransitionType(SwipeToDismissTransitionType);
        gesture();
      },
      direction === "right" || direction === "down"
        ? {
            rangeStart: 100,
            rangeEnd: 0,
          }
        : {
            rangeStart: 0,
            rangeEnd: 100,
          },
    );
  }
  function onScrollEnd() {
    let changed = false;
    const scrollElement = scrollRef.current;
    if (scrollElement !== null) {
      if (axis === "x") {
        const halfway =
          (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
        changed =
          direction === "right"
            ? scrollElement.scrollLeft < halfway
            : scrollElement.scrollLeft > halfway;
      } else {
        const halfway =
          (scrollElement.scrollHeight - scrollElement.clientHeight) / 2;
        changed =
          direction === "down"
            ? scrollElement.scrollTop < halfway
            : scrollElement.scrollTop > halfway;
      }
    }
    const cancelGesture = activeGestureRef.current;
    if (cancelGesture !== null) {
      activeGestureRef.current = null;
      cancelGesture();
    }
    if (changed) {
      // Trigger side-effects
      startTransition(action);
    }
  }

  useLayoutEffect(() => {
    const scrollElement = scrollRef.current;
    const dismissElement = dismissRef.current;
    const mainElement = mainRef.current;
    if (
      scrollElement === null ||
      dismissElement === null ||
      mainElement === null
    ) {
      return;
    }
    // After hydration we adjust the position so that it takes up double width which
    // enables scrolling. At the same time we snap the element's scroll position to
    // the starting point.
    switch (direction) {
      case "right":
        dismissElement.style.left = "0%";
        mainElement.style.left = "100%";
        scrollElement.scrollLeft =
          scrollElement.scrollWidth - scrollElement.clientWidth;
        break;
      case "left":
        dismissElement.style.left = "100%";
        mainElement.style.left = "0%";
        scrollElement.scrollLeft = 0;
        break;
      case "down":
        dismissElement.style.top = "0%";
        mainElement.style.top = "100%";
        scrollElement.scrollTop =
          scrollElement.scrollHeight - scrollElement.clientHeight;
        break;
      case "up":
        dismissElement.style.top = "100%";
        mainElement.style.top = "0%";
        scrollElement.scrollTop = 0;
        break;
    }
  }, [direction]);

  const scrollStyle = {
    position: "relative" as const,
    padding: "0px",
    margin: "0px",
    border: "0px",
    width: axis === "x" ? "100%" : "",
    height: axis === "y" ? "100%" : "",
    overflow: axis === "x" ? "scroll hidden" : "hidden scroll",
    scrollSnapType: axis + " mandatory",
    scrollbarWidth: "none" as const,
  };

  const dismissStyle = {
    position: "absolute" as const,
    padding: "0px",
    margin: "0px",
    border: "0px",
    width: "100%",
    height: "100%",
    scrollSnapAlign: "start",
    overflow: "hidden",
  };

  const mainStyle = {
    position: "relative" as const,
    padding: "0px",
    margin: "0px",
    border: "0px",
    width: "100%",
    height: "100%",
    scrollSnapAlign: "end",
    overflow: "hidden",
  };

  return (
    <div
      style={scrollStyle}
      onScroll={onScroll}
      onScrollEnd={onScrollEnd}
      ref={scrollRef}
    >
      <div style={dismissStyle} ref={dismissRef} />
      <div style={mainStyle} ref={mainRef}>
        {children}
      </div>
    </div>
  );
}
