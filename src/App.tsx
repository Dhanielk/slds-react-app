import React from 'react';
import './App.css';

import { BrandBand } from '@salesforce/design-system-react';

const App: React.FC = () => {
  return (
    <BrandBand
      id="brand-band-lightning-blue"
      className="slds-p-around_small"
      theme="lightning-blue"
    >
      <div className="slds-box slds-theme_default">
        <h3 className="slds-text-heading_label slds-truncate">SLDS React App!</h3>
      </div>
      <br />
    </BrandBand>
  );
}

export default App;
