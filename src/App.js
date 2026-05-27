import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [activeMenuTab, setActiveMenuTab] = useState('Lunch');
  const [activeGalleryTab, setActiveGalleryTab] = useState('Menu');

  const [activeTestiIndex, setActiveTestiIndex] = useState(0);
  const testiTrackRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const testimonialsData = [
    { name: "Syahrizal E. L", ini: "S", color: "#0A7FA6", text: "Tempat baru buat nongki. Mulai kopi, matcha, coklat, ada semua. Kalo lapar cobain deh nasi mentega. Kesini cocoknya sore hari menuju malem. Yuk gaslah gak pake lama." },
    { name: "Ester Lita", ini: "E", color: "#7B2CBF", text: "Tempatnya sangat Cozy, apalagi kalo buat nyore sambil nugas, tempat andalan klo buat nongki , makanan+minumannya josjis. BestMoira." },
    { name: "Kevin Jhonatan", ini: "K", color: "#36933F", text: "Translation to English: If you're looking for a quiet, peaceful place that's still close to the city's hustle and bustle, you have to visit Moria Café and Eatery!!" },
    { name: "Dean Augusta", ini: "D", color: "#6A1E9D", text: "Tempat nyaman buat yg ga terlalu suka tempat bising , menu lengkap dan mantull" },
    { name: "Triedi Kukuh. W", ini: "T", color: "#00887A", text: "tempat nya kozy,enak buat nongkrong vibes nya pantai banget sih ini" },
    { name: "Dwi Wahyuni", ini: "D", color: "#BC1254", text: "Tenang, harga cukup terjangkau, syahduu....nasi cumi hitamnya juwara... Red velvet ice jugaaa bikin nagih" },
    { name: "risty charissa", ini: "R", color: "#8A5D3B", text: "besttt ambience nya. minuman nya juga ga expect seenak ituhh. favoritku Hot Matcha Mo Latte & Kopi Oi!!!! GONG ENAK PUWOL!!!" },
    { name: "marhaenik enik", ini: "M", color: "#009BA5", text: "Tempatnya asik banget sih kata aku. enak banget buat nyantai bareng temen, bareng keluarga, bareng gebetan, buat nugas juga oke banget. Makanan sama minumannya gak diragukan lagii, enak poll" },
    { name: "Selda Metha", ini: "S", color: "#4A3115", text: "Tempat nya enak nyaman, harga sangat ramah di kantong ,cocok buat kalian yg mau nongkrong santaii bareng keluarga ,bestie atau bareng ayangg" }
  ];

  const galleryImages = [
    "/Gambar 1.png", // Big one
    "/gambar 2.jpeg",
    "/gambar 3.jpeg",
    "/gambar 4.jpeg",
    "/gambar 5.jpeg",
    "/gambar 6.jpeg",
    "/gambar 7.jpeg",
    "/gambar 8.jpeg",
    "/gambar 9.jpeg"
  ];

  const placeImages = [
    "/tempat 1.jpeg",
    "/tempat 2.jpeg",
    "/tempat 3.jpeg",
    "/tempat 4.jpeg",
    "/tempat 5.jpeg",
    "/tempat 6.jpeg"
  ];


  const handleTestiScroll = () => {
    if (testiTrackRef.current) {
      const scrollPos = testiTrackRef.current.scrollLeft;
      const cardWidth = 380 + 24; // .testi-card width + gap
      const index = Math.round(scrollPos / cardWidth);
      if (index !== activeTestiIndex) {
        setActiveTestiIndex(index);
      }
    }
  };

  const activePage = Math.floor(activeTestiIndex / 3);
  const totalPages = Math.ceil(testimonialsData.length / 3);

  const handleDotClick = (pageIndex) => {
    if (testiTrackRef.current) {
      const cardWidth = 380 + 24;
      testiTrackRef.current.scrollTo({
        left: (pageIndex * 3) * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app">
      <div className="hero-topbar-wrapper">
        <div className="hero-topbar">
          <div className="hero-nav-group">
            <a href="#tentang">Tentang Kita</a>
            <a href="#menu">Menu</a>
          </div>
          <a href="/" className="hero-logo">Moira</a>
          <div className="hero-nav-group">
            <a href="#gallery">Galeri</a>
            <a href="#reservasi">Reservasi</a>
          </div>
        </div>
      </div>

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-bg"></div>

          <div className="circle-top-left"></div>
          <img src="/mascot.png" alt="Moira Mascot" className="hero-mascot" />

          <div className="circle-bottom-right"></div>
          <img src="/coffee.png" alt="Coffee Splash" className="hero-coffee" />
          <img src="/food.png" alt="Rice and Chicken" className="hero-food" />

          <div className="hero-main-content">
            <h1 className="hero-main-logo">Moira</h1>
            <p className="hero-tagline">Brew, Bite & Sip — Your Ultimate Mood Booster</p>
          </div>

          <div className="hero-timecards">
            <div className="time-card">
              <span>Senin & Jumat</span>
              <strong>14 AM – 10 PM</strong>
            </div>
            <div className="time-card">
              <span>Selasa – Minggu</span>
              <strong>10 AM – 10 PM</strong>
            </div>
          </div>

          <button className="hero-play" aria-label="Play" onClick={() => setIsVideoModalOpen(true)}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 5V19L18 12L7 5Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <section className="hero-extension">
          <div className="extension-container">
            <div className="extension-left">
              <div className="extension-glow"></div>
              <img className="extension-img" src="/cafe-ambiance.jpg" alt="Cafe ambiance" />
            </div>
            <div className="extension-right">
              <div className="extension-rating">
                <span className="rating-text">Penilaian 4.8</span>
                <div className="rating-avatars">
                  <div className="avatar" style={{ background: '#986B41' }}>R</div>
                  <div className="avatar" style={{ background: '#009DAE' }}>M</div>
                  <div className="avatar" style={{ background: '#752598' }}>S</div>
                </div>
              </div>
              <h2 className="extension-tagline">Brew, Bite & Sip — Your Ultimate Mood Booster</h2>
            </div>
          </div>
        </section>

        <section id="tentang" className="section about">
          <div className="about-card">
            <div className="about-image">
              <img
                src="/tentang-kita.jpeg"
                alt="Moira interior"
              />
            </div>
            <div className="about-copy">
              <div className="about-badge">Tentang Kita</div>
              <h2 className="about-title">KAMI MERACIK, KAMU MENIKMATI</h2>
              <p className="about-desc">
                Nama Moira berasal dari penggabungan dua kata: Mora dan Oirama. Secara makna filosofis, Moira terinspirasi dari kata Yunani kuno 'Moira' yang berarti takdir atau perjalanan hidup. Moira hadir sebagai ruang nyaman untuk menikmati kopi, minuman, dan makanan dengan pengalaman yang hangat, modern, dan berjiwa komunitas.
              </p>
            </div>
          </div>
        </section>

        <section id="menu" className="section menu">
          <div className="menu-header">
            <span className="menu-eyebrow">Menu Kopi</span>
            <h2 className="menu-maintitle">TEMUKAN RASA FAVORITMU</h2>
          </div>
          <div className="menu-tabs">
            <button className={`tab ${activeMenuTab === 'Lunch' ? 'active' : ''}`} onClick={() => setActiveMenuTab('Lunch')}>Makanan</button>
            <button className={`tab ${activeMenuTab === 'Coffee' ? 'active' : ''}`} onClick={() => setActiveMenuTab('Coffee')}>Kopi</button>
            <button className={`tab ${activeMenuTab === 'Non coffee' ? 'active' : ''}`} onClick={() => setActiveMenuTab('Non coffee')}>Non Kopi</button>
            <button className={`tab ${activeMenuTab === 'Dessert' ? 'active' : ''}`} onClick={() => setActiveMenuTab('Dessert')}>Camilan</button>
          </div>

          <div className="menu-container fade-in" key={activeMenuTab}>
            {activeMenuTab === 'Lunch' && (
              <>
                <div className="menu-column menu-left">
                  <div className="menu-item anchor-right">
                    <div className="menu-title-badge">AYAM GORENG DAUN JERUK</div>
                    <p className="menu-desc-text">Ayam goreng bumbu khas Mora yang gurih dan renyah , dipadukan dengan aroma daun jeruk yang wangi dan menggoda. Sederhana, harum, dan selalu bikin nagih.</p>
                    <ul className="menu-variants">
                      <li>
                        <span className="variant-name">Nasi Putih</span>
                        <span className="variant-price">Rp. 19.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Nasi Mentega</span>
                        <span className="variant-price">Rp. 22.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Nasi Bejek</span>
                        <span className="variant-price">Rp. 22.000</span>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-item anchor-left mt-40">
                    <div className="menu-title-badge">BEEF SLICE</div>
                    <p className="menu-desc-text">Irisan daging sapi empuk dengan bumbu spesial Mora yang meresap sempurna. Gurih, juicy, dan pas dinikmati kapan saja bersama nasi hangat pilihanmu.</p>
                    <ul className="menu-variants">
                      <li>
                        <span className="variant-name">Nasi Putih</span>
                        <span className="variant-price">Rp. 22.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Nasi Mentega</span>
                        <span className="variant-price">Rp. 23.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Nasi Bejek</span>
                        <span className="variant-price">Rp. 23.000</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-divider"></div>

                <div className="menu-column menu-right">
                  <div className="menu-photo" style={{ overflow: "visible", background: "transparent" }}>
                    <img src="/makanan-ayam-goreng.png" alt="Special Menu" style={{ width: "100%", aspectRatio: "4/3", objectFit: "contain", filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.12))", transform: "scale(1.70)" }} />
                  </div>

                  <div className="menu-item anchor-right-outer mt-40">
                    <div className="menu-title-badge">CUMI HITAM</div>
                    <p className="menu-desc-text">Cumi segar dimasak dengan tinta hitam alami, menghasilkan rasa gurih yang dalam dan khas Tekstur empuk rasa autentik.</p>
                    <ul className="menu-variants">
                      <li>
                        <span className="variant-name">Nasi Putih</span>
                        <span className="variant-price">Rp. 22.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Nasi Mentega</span>
                        <span className="variant-price">Rp. 23.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Nasi Bejek</span>
                        <span className="variant-price">Rp. 23.000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {activeMenuTab === 'Coffee' && (
              <>
                <div className="menu-column menu-left">
                  <div className="menu-item coffee-layout anchor-right">
                    <div className="menu-title-badge" style={{ marginBottom: "0" }}>KOPI</div>
                    <ul className="menu-variants">
                      <li>
                        <span className="variant-name">Kopi Oi</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Kopi Rama</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Aren Latte</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Butterscoth Latte</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Cappucino</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Americano</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Blue Vanila Latte</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Avogato</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                    </ul>

                    {/* Addon Bar attached to outline */}
                    <div className="menu-title-badge flex-row-badge anchor-right-bottom">
                      <div className="addons-content">
                        <span>+ ESPRESSO</span>
                        <span>+ ES KRIM</span>
                      </div>
                      <span>Rp. 5.000</span>
                    </div>
                  </div>
                </div>

                <div className="menu-divider"></div>

                <div className="menu-column menu-right">
                  <div className="menu-photo" style={{ marginBottom: "40px", overflow: "visible", background: "transparent" }}>
                    <img src="/menu-kopi.png" alt="Special Coffee Menu" style={{ width: "100%", aspectRatio: "4/3", objectFit: "contain", filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.12))" }} />
                  </div>

                  <div className="menu-item anchor-right-outer">
                    <div className="menu-title-badge" style={{ marginBottom: "36px" }}>Manual brew</div>
                    <ul className="menu-variants">
                      <li>
                        <span className="variant-name">V60/ Japanese</span>
                        <span className="variant-price">Rp. 23.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Tubruk</span>
                        <span className="variant-price">Rp. 13.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Vietnam Drip</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Bon - Bon</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Aeropress</span>
                        <span className="variant-price">Rp. 20.000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {activeMenuTab === 'Non coffee' && (
              <>
                <div className="menu-column menu-left">
                  <div className="menu-item anchor-right">
                    <div className="menu-title-badge" style={{ marginBottom: "36px" }}>MATCHA</div>
                    <ul className="menu-variants">
                      <li>
                        <span className="variant-name">Matcha Mo Latte</span>
                        <span className="variant-price">Rp. 20.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Cheese Matcha</span>
                        <span className="variant-price">Rp. 23.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Strawberry Matcha</span>
                        <span className="variant-price">Rp. 23.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Dirty Matcha</span>
                        <span className="variant-price">Rp. 23.000</span>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-item anchor-left mt-40">
                    <div className="menu-title-badge" style={{ marginBottom: "36px" }}>MOCKTAIL</div>
                    <ul className="menu-variants">
                      <li>
                        <span className="variant-name">Galaxy Squash</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Orela Ice Tea</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Lecy Squash</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Green Day</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-divider"></div>

                <div className="menu-column menu-right">
                  <div className="menu-item anchor-right-outer">
                    <div className="menu-title-badge" style={{ marginBottom: "36px" }}>SUSU</div>
                    <ul className="menu-variants">
                      <li>
                        <span className="variant-name">Chocolate</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Taro</span>
                        <span className="variant-price">Rp. 15.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Charcoal Cheese</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Choco Oreo</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-photo" style={{ marginTop: "50px", overflow: "visible", background: "transparent" }}>
                    <img src="/menu-non-kopi.png" alt="Special Drink Mix" style={{ width: "100%", aspectRatio: "4/3", objectFit: "contain", filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.12))" }} />
                  </div>
                </div>
              </>
            )}

            {activeMenuTab === 'Dessert' && (
              <>
                <div className="menu-title-badge" style={{ gridColumn: '1 / -1', borderRadius: '999px', textAlign: 'center', margin: '0 20px 0 20px', position: 'relative', zIndex: 2 }}>
                  CAMILAN
                </div>

                <div className="menu-column menu-left">
                  <div className="menu-item anchor-right" style={{ marginTop: "0px" }}>
                    <ul className="menu-variants" style={{ gap: "32px" }}>
                      <li>
                        <span className="variant-name">Gandum Ice Delight</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Mix Platter</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                      <li>
                        <span className="variant-name">French Fries</span>
                        <span className="variant-price">Rp. 12.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Tahu Walik</span>
                        <span className="variant-price">Rp. 12.000</span>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-photo" style={{ marginTop: "60px", overflow: "visible", background: "transparent" }}>
                    <img src="/camilan-platter.png" alt="Mix Platter" style={{ width: "100%", aspectRatio: "4/3", objectFit: "contain", filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.12))", transform: "scale(1.70)" }} />
                  </div>
                </div>

                <div className="menu-divider" style={{ marginTop: "-40px", height: "calc(100% + 40px)", position: "relative", zIndex: 1 }}></div>

                <div className="menu-column menu-right">
                  <div className="menu-photo" style={{ marginBottom: "60px", overflow: "visible", background: "transparent" }}>
                    <img src="/camilan-dimsum.png" alt="Dimsum Mentai" style={{ width: "100%", aspectRatio: "4/3", objectFit: "contain", filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.12))", transform: "scale(1.85)" }} />
                  </div>

                  <div className="menu-item anchor-right-outer">
                    <ul className="menu-variants" style={{ gap: "32px" }}>
                      <li>
                        <span className="variant-name">Dimsum Mentai</span>
                        <span className="variant-price">Rp. 20.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Croffle</span>
                        <span className="variant-price">Rp. 18.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Cookies</span>
                        <span className="variant-price">Rp. 5.000</span>
                      </li>
                      <li>
                        <span className="variant-name">Jamur Crispy</span>
                        <span className="variant-price">Rp. 12.000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="section product">
          <div className="new-product-card" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.96)), url('/bg-pattern.png')" }}>
            <div className="product-image-left">
              <img src="/kopi-robusta.png" alt="Kemasan Kopi Robusta" />
            </div>
            <div className="product-badge-wrap">
              <div className="product-badge-custom">Produk</div>
            </div>
            <div className="product-content">
              <h2 className="product-title">SERIES SPESIAL, SELALU BARU</h2>
              <p className="product-desc">
                Hadir dengan kreasi rasa yang terus berganti, setiap series menawarkan pengalaman baru yang unik. Diracik dengan bahan pilihan, siap kamu nikmati di setiap kunjungan
              </p>
              <a href="https://s.shopee.co.id/20rB9Y1KVD?share_channel_code=1" target="_blank" rel="noopener noreferrer" className="product-btn">Selengkapnya</a>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section testimonials-section">
          <div className="testi-container">
            <div className="testi-header">
              <div className="testi-badge">Testimoni</div>
              <h2 className="testi-title">RASA YANG DIAKUI BANYAK ORANG</h2>
            </div>

            <div className="testi-carousel-wrapper">
              <div className="testi-track" ref={testiTrackRef} onScroll={handleTestiScroll}>
                {testimonialsData.map((t, idx) => (
                  <article className="testi-card" key={idx}>
                    <div className="testi-user">
                      <div className="testi-avatar" style={{ backgroundColor: t.color }}>{t.ini}</div>
                      <div className="testi-name-wrap">
                        <span className="testi-name">{t.name}</span>
                      </div>
                    </div>
                    <p className="testi-text">{t.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="testi-dots">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${activePage === idx ? 'active' : ''}`}
                  onClick={() => handleDotClick(idx)}
                  style={{ cursor: 'pointer' }}
                ></span>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="section-head gallery-head">
            <span className="gallery-eyebrow">Galeri</span>
            <h2 className="gallery-maintitle">CERITA DALAM SETIAP GAMBAR</h2>
            <div className="gallery-tabs">
              <span className={activeGalleryTab === 'Menu' ? 'active' : ''} onClick={() => setActiveGalleryTab('Menu')}>Menu</span>
              <span className={activeGalleryTab === 'Place' ? 'active' : ''} onClick={() => setActiveGalleryTab('Place')}>Tempat</span>
            </div>
          </div>

          <div className="gallery-container fade-in" key={activeGalleryTab}>
            {activeGalleryTab === 'Menu' && (
              <div className="gallery-grid">
                {galleryImages.map((src, idx) => (
                  <div
                    className="gallery-item"
                    key={idx}
                    onClick={() => setSelectedImage(src)}
                  >
                    <img src={src} alt={`Gallery item ${idx + 1}`} />
                    <div className="zoom-indicator">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeGalleryTab === 'Place' && (
              <div className="place-grid">
                {placeImages.map((src, idx) => (
                  <div
                    className={`gallery-item place-item-${idx + 1}`}
                    key={idx}
                    onClick={() => setSelectedImage(src)}
                  >
                    <img src={src} alt={`Gallery place ${idx + 1}`} />
                    <div className="zoom-indicator">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="reservasi" className="section reservation">
          <div className="reservation-header">
            <div className="reservation-badge">Reservasi</div>
            <h2 className="reservation-maintitle">PESAN SEKARANG, RASAKAN LANGSUNG</h2>
          </div>
          <div className="reservation-container">
            <div className="opening-hours">
              <h3>JAM BUKA</h3>

              <div className="hour-card anchor-left">
                <div className="hour-badge">
                  <span className="day">Senin - Kamis</span>
                  <span className="time">8AM - 6PM</span>
                </div>
              </div>

              <div className="hour-card anchor-left" style={{ marginTop: "24px" }}>
                <div className="hour-badge">
                  <span className="day">Jumat</span>
                  <span className="time">10AM - 7 PM</span>
                </div>
              </div>
            </div>

            <form className="reservation-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const date = formData.get('date');
              const time = formData.get('time');

              const message = `Halo Moira Cafe!\nSaya ingin melakukan reservasi dengan detail berikut:\n\nNama: ${name}\nTanggal: ${date}\nJam: ${time}\n\nMohon info ketersediaan mejanya ya. Terima kasih!`;
              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/6285729940431?text=${encodedMessage}`, '_blank');
            }}>
              <input type="text" name="name" placeholder="Masukkan Nama Anda" required />
              <div className="form-group-row">
                <input
                  type="text"
                  name="date"
                  placeholder="Masukkan Hari Tanggal"
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                  required
                />
                <input
                  type="text"
                  name="time"
                  placeholder="Masukkan Jam"
                  onFocus={(e) => e.target.type = 'time'}
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                  required
                />
              </div>
              <button type="submit" className="btn-primary">Reservasi</button>
            </form>
          </div>
        </section>
      </main>

      <section className="contact-footer-wrapper">
        <div className="contact-floating-bar">
          <a href="https://wa.me/6285729940431" target="_blank" rel="noopener noreferrer" className="contact-icon-link wa">
            <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@thisismoira_?_r=1&_t=ZS-95BrfvRyW8r" target="_blank" rel="noopener noreferrer" className="contact-icon-link tiktok">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
              <g transform="scale(0.9) translate(1.2, 1.2)">
                <path fill="#25F4EE" transform="translate(-0.6, -0.6)" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.29-2.9 5.5-1.95 1.34-4.51 1.63-6.72.68-2.61-1.07-4.43-3.69-4.35-6.57.06-2.58 1.7-4.89 4.13-5.83 1.37-.53 2.98-.6 4.38-.17V14.6c-1.13-.39-2.55-.3-3.52.44-.79.61-1.28 1.57-1.1 2.56.23 1.25 1.41 2.21 2.68 2.26 1.48.06 2.82-1.05 3.01-2.52.12-.9.08-1.81.08-2.73 0-4.85-.01-9.69 0-14.54z" />
                <path fill="#FE2C55" transform="translate(0.6, 0.6)" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.29-2.9 5.5-1.95 1.34-4.51 1.63-6.72.68-2.61-1.07-4.43-3.69-4.35-6.57.06-2.58 1.7-4.89 4.13-5.83 1.37-.53 2.98-.6 4.38-.17V14.6c-1.13-.39-2.55-.3-3.52.44-.79.61-1.28 1.57-1.1 2.56.23 1.25 1.41 2.21 2.68 2.26 1.48.06 2.82-1.05 3.01-2.52.12-.9.08-1.81.08-2.73 0-4.85-.01-9.69 0-14.54z" />
                <path fill="#FFFFFF" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.29-2.9 5.5-1.95 1.34-4.51 1.63-6.72.68-2.61-1.07-4.43-3.69-4.35-6.57.06-2.58 1.7-4.89 4.13-5.83 1.37-.53 2.98-.6 4.38-.17V14.6c-1.13-.39-2.55-.3-3.52.44-.79.61-1.28 1.57-1.1 2.56.23 1.25 1.41 2.21 2.68 2.26 1.48.06 2.82-1.05 3.01-2.52.12-.9.08-1.81.08-2.73 0-4.85-.01-9.69 0-14.54z" />
              </g>
            </svg>
          </a>
          <a href="https://www.instagram.com/thisismoira_/" target="_blank" rel="noopener noreferrer" className="contact-icon-link ig">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://spf.shopee.co.id/1BI55d4ISH" target="_blank" rel="noopener noreferrer" className="contact-icon-link shopee">
            <svg viewBox="15 15 70 70" width="38" height="38" fill="none">
              <defs>
                <mask id="shopee-mask">
                  <path d="M 34 25 L 66 25 L 75 37 L 75 75 Q 75 80 70 80 L 30 80 Q 25 80 25 75 L 25 37 Z" fill="#FFFFFF" />
                  <rect x="40" y="31" width="20" height="5" rx="1.5" fill="#000000" />
                  <path d="M 34 45 V 56 Q 34 61 37 61 V 85 H 41 V 61 Q 44 61 44 56 V 45 H 42 V 55 H 40 V 45 H 38 V 55 H 36 V 45 Z" fill="#000000" />
                  <ellipse cx="61" cy="52" rx="6" ry="9" fill="#000000" />
                  <rect x="59" y="60" width="4" height="25" fill="#000000" />
                </mask>
              </defs>
              <rect x="0" y="0" width="100" height="100" fill="#FFFFFF" mask="url(#shopee-mask)" />
            </svg>
          </a>
          <a href="https://gofood.link/a/SgKXPrbyang" target="_blank" rel="noopener noreferrer" className="contact-icon-link gofood">
            <svg viewBox="12 12 76 76" width="38" height="38" fill="none">
              <path d="M 25 35 V 28 Q 25 25 28 25 Q 31 25 31 28 V 40 H 33 V 28 Q 33 25 36 25 Q 39 25 39 28 V 40 H 41 V 28 Q 41 25 44 25 Q 47 25 47 35 V 45 Q 47 52 42 55 V 70 Q 42 75 36 75 Q 30 75 30 70 V 55 Q 25 52 25 45 Z" fill="#FFFFFF" />
              <path d="M 65 22 C 78 22 78 40 73 50 Q 71 53 71 55 V 70 Q 71 75 65 75 Q 59 75 59 70 V 55 Q 59 53 57 50 C 52 40 52 22 65 22 Z" fill="#FFFFFF" />
            </svg>
          </a>
        </div>

        <footer className="moira-footer">
          <div className="footer-inner">
            <div className="footer-col-left">
              <h2 className="footer-brand">Moira</h2>
              <p className="footer-desc">
                Cafe Moira adalah cafe berkonsep clean dan modern dengan suasana nyaman, menyajikan kopi dan minuman berkualitas untuk menemani waktu santai.
              </p>
            </div>
            <div className="footer-col-mid">
              <h3 className="footer-links-title">TAUTAN PENTING</h3>
              <ul className="footer-nav">
                <li><a href="#tentang">Beranda</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservasi">Reservasi</a></li>
                <li><a href="#testimonials">Testimoni</a></li>
              </ul>
            </div>
            <div className="footer-col-right">
              <a href="https://maps.app.goo.gl/zTQr5hsDmy4phDz66" target="_blank" rel="noopener noreferrer" className="footer-map-container">
                <img src="/map_placeholder.png" alt="Google Maps Location" className="footer-map-img" />
              </a>
            </div>
          </div>
        </footer>
      </section>

      {/* Lightbox Modal */}
      <div className={`lightbox-overlay ${selectedImage ? 'active' : ''}`} onClick={() => setSelectedImage(null)}>
        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          {selectedImage && <img src={selectedImage} alt="Enlarged gallery view" className={`lightbox-image ${placeImages.indexOf(selectedImage) >= 1 && placeImages.indexOf(selectedImage) <= 5 ? 'lightbox-image-crop' : ''} ${placeImages.indexOf(selectedImage) === 2 ? 'lightbox-image-top' : ''}`} />}
        </div>
      </div>

      {/* TikTok Component Modal */}
      <div className={`video-modal-overlay ${isVideoModalOpen ? 'active' : ''}`} onClick={() => setIsVideoModalOpen(false)}>
        <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="video-modal-close" onClick={() => setIsVideoModalOpen(false)}>&times;</button>
          {isVideoModalOpen && (
            <iframe
              src="https://www.tiktok.com/embed/v2/7591039051797368072"
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: '16px' }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="TikTok Video"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
