import { useEffect, useState } from "react";
import Panel from "../Panel/Panel";

const Form = () => {

  const [seoChecked, setSeoChecked] = useState(false);
  const [adsChecked, setAdsChecked] = useState(false);
  const [webChecked, setWebChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState(1);

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeoChecked(e.target.checked);
  };

  const handleAdsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdsChecked(e.target.checked);
  };

  const handleWebChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebChecked(e.target.checked);
  };

  const handleMinusPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handlePlusPage = () => {
    setPage(page + 1);
  };

  const handleMinusLang = () => {
    if (language > 1) {
      setLanguage(language - 1);
    }
  };
  const handlePlusLang = () => {
    setLanguage(language + 1);
  };

  const total = (seoChecked ? 300 : 0) + (adsChecked ? 400 : 0) + (webChecked ? 500 + (page * language * 30) : 0 );


  useEffect(() => {

  }, [total]);

  return (
    <div className="hero min-h-screen h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
            <div className="card-body">
              <div className="card-actions justify-center">
                <h2 className='text-base-100'>SEO 300€</h2>
              </div>
              <label htmlFor="seo">
                <span className="label-text text-base-100 m-3 align-top">Comprar</span>
                <input type="checkbox" onChange={handleSeoChange} checked={seoChecked} className="checkbox checkbox-secondary" />
              </label>
            </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
            <div className="card-body">
              <div className="card-actions justify-center">
                <h2 className='text-base-100'>ADS 400€</h2>
              </div>
              <label htmlFor="ads">
                <span className="label-text text-base-100 m-3 align-top">Comprar</span>
                <input type="checkbox" onChange={handleAdsChange} checked={adsChecked} className="checkbox checkbox-secondary" />
              </label>
            </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
            <div className="card-body">
              <div className="card-actions justify-center">
                <h2 className='text-base-100'>WEB 500€</h2>
              </div>
              <label htmlFor="web">
                <span className="label-text text-base-100 m-3 align-top">Comprar</span>
                <input type="checkbox" onChange={handleWebChange} checked={webChecked} className="checkbox checkbox-secondary" />
              </label>
              {webChecked && <Panel handlePlusPage={handlePlusPage} handleMinusPage={handleMinusPage} 
              handlePlusLang = {handlePlusLang} handleMinusLang={handleMinusLang} page={page} language={language}/>}
          </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
            <div className="card-body">
              <div className="card-actions justify-center">
                <p className='text-base-100 text-end'>Total: {total}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
  };



  export default Form;