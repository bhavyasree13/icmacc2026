export default function Acknowledgement() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 px-4 py-12">
      <div className="relative w-full max-w-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>

        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-12 border border-white/20">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-t-2xl"></div>

          <div className="mb-6 flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">✓</span>
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-center text-slate-900 mb-6">
            Acknowledgement
          </h1>

          <div className="text-slate-700 text-base leading-relaxed">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </div>
        </div>
      </div>
    </main>
  );
}
