export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"
          aria-hidden
        />
        <p className="text-gray-500 font-medium">Loading...</p>
        <span className="sr-only">Loading page content</span>
      </div>
    </div>
  )
}
