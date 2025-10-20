  import { Swiper, SwiperSlide } from 'swiper/react'
  import { Navigation } from 'swiper/modules'
  import productsData from '../../json/products.json'
  import ArrowLeft from "../../assets/arrow-left.svg"
  import ArrowRight from "../../assets/arrow-right.svg"
  import 'swiper/css';
  import 'swiper/css/navigation';

  import ProductModal from '../product-modal/product-modal'
  import './related-products.scss'
import { useState } from 'react'

interface Product {
  productName: string
  descriptionShort: string
  price: number
  photo: string
}

  const RelatedProducts = () => {
  const products: Product[] = productsData.products

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product)
  }

    const handleCloseModal = () => {
    setSelectedProduct(null)
  }

    return (
      <section className="related-products">
        <button className="swiper-button-prev-custom">
          <img src={ArrowLeft} alt="arrow left" />
        </button>
        <Swiper
          spaceBetween={18}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="container"
          breakpoints={{
            1280: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.price} className="card-product">
              <img src={product.photo} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p className="desc">{product.descriptionShort}</p>
              <span>R$ {product.price.toLocaleString()}</span>
              <p className="frete-gratis">Frete grátis</p>
              <button onClick={() => handleOpenModal(product)}>Comprar</button>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-next-custom">
          <img src={ArrowRight} alt="arrow right" />
        </button>

              {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}

      </section>
    )
  }

  export default RelatedProducts
