  export default function SkeletonCard() {
    return (
      <div className="animate-pulse space-y-4 w-full h-100 gap-2 p-10 justify-center">
        <div className="bg-gray-300 h-40 w-full rounded-md flex flex-wrap max-w-[1800px] gap-4 p-4 justify-center" /> {/* imagem */}
        <div className="h-4 bg-gray-300 rounded w-3/4" /> {/* título */}
        <div className="h-4 bg-gray-300 rounded w-1/2" /> {/* preço */}
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-[90%]" />
        <div className="h-3 bg-gray-200 rounded w-[80%]" />
        <div className="h-2 bg-blue-300 rounded w-screan flex items-center justify-center gap-2 pt-5" /> {/* botão */}
      </div>
    );
  }