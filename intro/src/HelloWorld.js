import logo from './logo.svg';
function HelloWorld() {
    return (
      <div>
        <header className="App-header">
            <h2>Hello World</h2>
            <img src={logo} className="App-logo" alt="logo" />
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        <main className='App-main'>
            <div>
                <h2>React Başlangıç Bilgileri</h2>
                <h3>React Nedir?</h3>
                <p>React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir.</p>

                <h3>Önemli Kavramlar</h3>
                <ul>
                    <li><strong>Component:</strong> Uygulama arayüzünü küçük, bağımsız parçalara böler.</li>
                    <li><strong>Props:</strong> Componentler arası veri aktarımı sağlar.</li>
                    <li><strong>State:</strong> Bir componentin durumunu izler ve günceller.</li>
                </ul>

                <h3>React Komut Satırı Komutları</h3>
                <pre>
                    <code>
                    # Yeni proje oluşturmak için: npx create-react-app proje-adi{'\n'}
                    # Projeyi başlatmak için: npm start{'\n'}
                    # Build almak için: npm run build
                    </code>
                </pre>

                <h3>Yararlı Kaynaklar</h3>
                <p>
                    <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
                    React Documentation
                    </a>
                </p>
            </div>
        </main>

      </div>
    );
  }
  
  export default HelloWorld;
  