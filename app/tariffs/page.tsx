export default function Tariffs() {
  return (
    <div className="min-h-screen bg-dark text-white p-8">
      <h1 className="text-4xl font-cyber text-center mb-8">Тарифы Kiberi TV</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-cyber-green/30">
          <h2 className="text-2xl mb-4">Базовый</h2>
          <p className="text-3xl font-bold mb-4">€9.99/мес</p>
          <ul className="mb-6 space-y-2">
            <li>200 каналов</li>
            <li>HD качество</li>
            <li>Мобильное ТВ</li>
          </ul>
          <a href="/order" className="btn-primary block text-center">Заказать</a>
        </div>
        {/* Добавьте другие тарифы аналогично */}
      </div>
    </div>
  );
}
