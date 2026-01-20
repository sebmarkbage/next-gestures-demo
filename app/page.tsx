import Link from "next/link";
import { ViewTransition } from "react";
// @ts-ignore
import { Before, LeftAlignedCrossFade } from './transitions.module.css';

export default function HomeScreen() {
  return (
    <ViewTransition name="home" update="none" enter={Before} exit={Before}>
      <div className="flex flex-col h-full bg-white">
        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 safe-area-top flex items-center">
          <ViewTransition name="toolbar-back" default={LeftAlignedCrossFade}>
            <span className="flex-none w-0 h-[1.5em]"></span>
          </ViewTransition>
          <ViewTransition name="toolbar-caption" default={LeftAlignedCrossFade}>
            <h1 className="text-xl font-semibold text-gray-900">Home</h1>
          </ViewTransition>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <div className="text-5xl mb-3">🏠</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome</h2>
              <p className="text-gray-600">
                This is the home screen of your mobile app
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 px-2">
                Quick Actions
              </h3>

              <Link
                href={"/details"}
                className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center justify-between active:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                    📱
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      View Details
                    </div>
                    <div className="text-sm text-gray-500">
                      See more information
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/settings"}
                className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center justify-between active:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                    ⚙️
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Settings</div>
                    <div className="text-sm text-gray-500">
                      Configure your app
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/analytics"}
                className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center justify-between active:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                    📊
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Analytics</div>
                    <div className="text-sm text-gray-500">View your stats</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}
