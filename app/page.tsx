export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 bg-dark text-white">
      <div className="max-w-5xl mx-auto z-10">
        <h1 className="text-6xl md:text-8xl font-cyber text-white mb-6 leading-none">
          KIBERI<span className="text-cyber-green glitch" data-text="TV">TV</span>
        </h1>
        <p className="text-2xl md:text-4xl text-gray-200 mb-10 font-light">
          Более 500 русских каналов в Латвии<br />
          Full HD · 4K · Без переплат · Работает в Риге и по всей стране
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/tariffs" className="btn-primary">
            Выбрать тариф
          </a>
          <a href="/trial" className="btn-secondary">
            Бесплатный тест 24 часа
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-10 h-10 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
