import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/Navbar'; // 경로 수정
import Search from './Search.jsx'

//메인 페이지 문구
const HeroSection = () => (
  <section className="hero-section">
    <h1>NongBu<br />New Options, New Generation By Unity</h1>
  </section>
);

//메인 페이지 유튜브
const VideoSection = () => (
  <section className="video-section">
    <h2>공식 영상</h2>
    <div className="video-container">
      {/* YouTube video embed code */}
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

//메인 페이지 서비스 소개
const ServiceIntroduction = () => (
  <section className="service-introduction">
    <h3>서비스 소개</h3>
    <p>농촌 지역 인구 고령화와 도시화로 인해 사용되지 않는 농지가 증가하고 있습니다.<br />NongBu 서비스는 AI 기술을 이용하여 농업에서 사용되지 않거나 활용되지 않는 땅을 감지해 내고, 임대할 수 있도록 도와줍니다.</p>
    <p>AI 활용 농지 조사 시스템은 첨단 AI 기술로 저활용 농지를 탐지하여 임대 서비스를 제공합니다.<br />청년 농업인들이 쉽게 농업을 시작하고, 정부는 사용되지 않는 농지를 효율적으로 활용할 수 있도록 지원합니다.</p>
  </section>
);

//메인 페이지 푸터
const Footer = () => (
  <footer className="footer">
    <p>© KT AILVE 20조 농지탐정단 ALL RIGHTS RESERVED.</p>
  </footer>
);

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <Search />
        <VideoSection />
        <ServiceIntroduction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
