import Link from "next/link";
import { ViewTransition } from "react";
// @ts-ignore
import { After, LeftAlignedCrossFade } from "../transitions.module.css";
import SwipeToNavigate from "../SwipeToNavigate";

export default function DetailsScreen() {
  return (
    <ViewTransition name="detail" update="none" enter={After} exit={After}>
      <SwipeToNavigate href="/">
        <div className="flex flex-col h-full bg-white">
          {/* Toolbar with Back Button */}
          <div className="bg-white border-b border-gray-200 px-4 py-3 safe-area-top flex items-center gap-2">
            <ViewTransition name="toolbar-back" default={LeftAlignedCrossFade}>
              <Link
                href="/"
                className="flex items-center gap-1 text-blue-500 active:opacity-70 transition-opacity -ml-2 pr-2"
              >
                <span className="font-normal">Back</span>
              </Link>
            </ViewTransition>
            <ViewTransition
              name="toolbar-caption"
              default={LeftAlignedCrossFade}
            >
              <h1 className="text-xl font-semibold text-gray-900">Details</h1>
            </ViewTransition>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white text-center">
                <div className="text-5xl mb-3">✨</div>
                <h2 className="text-2xl font-bold mb-2">Details Screen</h2>
                <p className="opacity-90">
                  You've navigated to the second screen
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Information
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Screen</span>
                    <span className="font-medium text-gray-900">Details</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Navigation</span>
                    <span className="font-medium text-gray-900">iOS Style</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Framework</span>
                    <span className="font-medium text-gray-900">Next.js</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Back Button</span>
                    <span className="font-medium text-gray-900">Available</span>
                  </div>
                </div>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam hendrerit, nisi tristique sodales viverra, turpis
                  libero feugiat urna, sed efficitur massa elit et tellus. Morbi
                  at dui at erat ornare dapibus feugiat sit amet neque. Donec
                  ullamcorper est vel lobortis pulvinar. Donec dapibus ligula
                  vel erat finibus rhoncus. Vivamus risus turpis, bibendum ut
                  ligula sit amet, dignissim commodo eros. Donec non mauris
                  hendrerit, fermentum lorem in, pellentesque mi. Nam nec
                  molestie mi, a mollis nisi. Cras aliquam pulvinar
                  sollicitudin. Nam molestie feugiat lectus, id fermentum tortor
                  iaculis et. Aenean pharetra eget neque eget laoreet. Nullam at
                  semper ipsum. Donec suscipit magna vitae velit ullamcorper,
                  malesuada eleifend ipsum tincidunt. Etiam euismod tortor non
                  turpis placerat convallis.
                </p>
                <p>
                  Quisque convallis lectus urna, lobortis imperdiet erat
                  sagittis in. Nulla ut nunc vestibulum, sodales nunc at,
                  sagittis odio. Nunc eleifend ornare massa at ullamcorper. Ut
                  dictum lacus non leo egestas, nec luctus metus pretium. Nullam
                  eget magna eget nunc dapibus venenatis eget non mi. Vivamus
                  elit diam, dapibus in dictum a, dictum ut ipsum. Suspendisse
                  in ullamcorper erat. In fringilla lorem ac lorem sollicitudin,
                  a tempus ex mattis. Pellentesque efficitur nisi est, ut
                  pulvinar nunc accumsan in. Sed rutrum quam eget mauris
                  rhoncus, non eleifend metus sagittis. Donec lacinia massa et
                  risus hendrerit viverra.
                </p>
                <p>
                  Integer congue non libero pellentesque tempus. Sed sodales
                  mauris at facilisis pretium. Pellentesque quis auctor nisi.
                  Pellentesque vitae fermentum erat. Nunc non sagittis mi. Cras
                  sagittis molestie ligula, quis bibendum velit gravida id.
                  Integer ac varius sapien. Proin sit amet mauris ac orci
                  facilisis bibendum ut in purus. Ut bibendum dui ut ultricies
                  interdum. Aliquam purus erat, commodo vitae sapien ut, egestas
                  lacinia augue. Suspendisse potenti.
                </p>
                <p>
                  Praesent tincidunt risus dui, at varius lectus semper vel.
                  Fusce molestie enim sit amet nunc blandit dictum. Proin
                  placerat dictum nulla, id varius justo luctus ut. Suspendisse
                  vitae sollicitudin nisi. Donec tincidunt mauris quam, sed
                  pretium magna aliquet blandit. Praesent vitae rutrum leo,
                  pulvinar lobortis elit. Aliquam sed eros urna. Nam mattis
                  elementum orci at pellentesque. Sed placerat euismod tellus
                  nec lobortis. Curabitur pretium urna non lorem condimentum
                  lacinia. Ut feugiat fringilla erat, ac interdum tortor
                  sagittis a. Nunc et lacus a eros porta venenatis. Aenean sit
                  amet ligula at ligula consectetur ultrices. Curabitur
                  consectetur lectus ut ultricies fringilla. Mauris vehicula
                  dolor ac nibh vestibulum, sit amet aliquam velit dapibus. In
                  arcu magna, volutpat vel lacus at, pretium ornare mauris.
                </p>
                <p>
                  Praesent eu pulvinar neque. Nulla facilisi. Maecenas pretium
                  consectetur nunc, id accumsan diam lacinia non. Nullam
                  sollicitudin ac lorem at eleifend. Praesent sollicitudin
                  libero sed nunc ultricies, sed pulvinar orci tincidunt.
                  Maecenas a ex nulla. Nulla lacinia leo ac erat semper
                  eleifend. Aliquam commodo nisl eu ante elementum dapibus.
                  Aenean posuere orci sit amet nisi vestibulum dapibus. Donec id
                  volutpat risus, nec malesuada purus. Pellentesque congue nisl
                  in quam tempor rutrum. Nullam quis auctor ante.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-4 flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Tip</h4>
                  <p className="text-sm text-gray-600">
                    Use the back button in the toolbar to return to the home
                    screen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwipeToNavigate>
    </ViewTransition>
  );
}
