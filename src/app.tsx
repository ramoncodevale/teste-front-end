import Header from "./components/header/header"
import ShopByCategory from "./components/category/shop-by-caategory"
import Tabs from "./components/tabs/tabs"
import Hero from "./components/hero/hero"
import RelatedProducts from "./components/related-products/related-products"
import CardSuport from "./components/suport/card-suport"
import Brands from "./components/brands/brands"
import Newsletter from "./components/newsletter/newsletter"
import Footer from "./components/footer/footer"



function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShopByCategory />
      <div className="related-product-tabs">
        <div className="container">
          <div className="line"></div>
          <h3>Produtos relacionados</h3>
          <div className="line"></div>
        </div>

      </div>
      <Tabs />
      <RelatedProducts />
      <div className="container-card">
        <div className="container">
          <CardSuport />
          <CardSuport />
        </div>

      </div>
      <div className="related-product-tabs">
        <div className="container">
          <div className="line"></div>
          <h3>Produtos relacionados</h3>
          <div className="line"></div>
        </div>
        <div className="link-container">
          <a href="#">Ver todos</a>
        </div>

      </div>
      <RelatedProducts />
      <div className="container-card">
        <div className="container">
          <CardSuport />
          <CardSuport />
        </div>
      </div>
      <Brands />
       <div className="related-product-tabs">
        <div className="container">
          <div className="line"></div>
          <h3>Produtos relacionados</h3>
          <div className="line"></div>
        </div>
        <div className="link-container">
          <a href="#">Ver todos</a>
        </div>

      </div>
      <RelatedProducts />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
