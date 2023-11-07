import React from 'react'
import SideNav from "../SideNav";
import Header from "../Header";

interface BrandToneProps {
  toggleBrandVoiceClick: () => void;
  isBrandVoiceOpen: boolean;
}

const BrandTone: React.FC<BrandToneProps> = ({ toggleBrandVoiceClick, isBrandVoiceOpen }) => {
  return (
    <div className="grid">
      <SideNav
        toggleBrandVoiceClick={toggleBrandVoiceClick}
        isBrandVoiceOpen={isBrandVoiceOpen}
      />
      <Header />
      <div className="voice-tone py-3 px-4">
        <h3>Voice & Tone</h3>
      </div>
    </div>
  );
}

export default BrandTone;