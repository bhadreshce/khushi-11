import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../cart/cartSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// import ReactImageMagnify from 'react-image-magnify';
const ProductDetails = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const [prd, setPrd] = useState({})
    useEffect(() => {
        getProduct()
    }, [id])

    const getProduct = async () => {
        let product = await axios.get(`http://localhost:8000/product/${id}`)
        console.log(product.data);
        setPrd(product.data)
    }

    const insertCart = async () => {

        let cartItem = await axios.get(`http://localhost:8000/cart?productid=${prd.id}`)
        // console.log(cartItem);

        if (cartItem.data.length == 0) {
            await axios.post(`http://localhost:8000/cart`, { productid: prd.id, quantity: 1 })
        } else {
            let cartyData = cartItem.data[0]
            await axios.patch(`http://localhost:8000/cart/${cartyData.id}`, { quantity: cartyData.quantity + 1 })
        }
        dispatch(addToCart(1))
    }


    return (
        <>
            {/* <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: false,
                    src: "https://suta.in/cdn/shop/products/my-photo-in-a-red-saree-868177.jpg?v=1613454462&width=800",
                    width: 200,
                    height: 200
                },
                largeImage: {
                    src: "https://suta.in/cdn/shop/products/my-photo-in-a-red-saree-868177.jpg?v=1613454462&width=800",
                    width: 1200,
                    height: 1200
                }
            }} /> */}
            <main style={{ paddingTop: 90 }}>
                <div className="mb-md-1 pb-md-3" />
                <section className="product-single container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div
                                className="product-single__media vertical-thumbnail product-media-initialized"
                                data-media-type="vertical-thumbnail"
                            >
                                <div className="product-single__image">
                                    <div
                                        className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        style={{ cursor: "grab" }}
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-ab4afd456f3d54e9"
                                            aria-live="polite"
                                            style={{ transform: "translate3d(0px, 0px, 0px)" }}
                                        >
                                            <div
                                                className="swiper-slide product-single__image-item swiper-slide-active"
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 534, marginRight: 32 }}
                                            >
                                                <img
                                                    loading="lazy"
                                                    className="h-auto"
                                                    src={prd.ProductImage}
                                                    width={674}
                                                    height={674}
                                                    alt=""
                                                />
                                                <a
                                                    data-fancybox="gallery"
                                                    href={prd.ProductImage}
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title=""
                                                    data-bs-original-title="Zoom"
                                                >
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_zoom" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide product-single__image-item swiper-slide-next"
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 534, marginRight: 32 }}
                                            >
                                                <img
                                                    loading="lazy"
                                                    className="h-auto"
                                                    src="../images/products/product_0-1.jpg"
                                                    width={674}
                                                    height={674}
                                                    alt=""
                                                />
                                                <a
                                                    data-fancybox="gallery"
                                                    href="../images/products/product_0-1.jpg"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title=""
                                                    data-bs-original-title="Zoom"
                                                >
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_zoom" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide product-single__image-item"
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 534, marginRight: 32 }}
                                            >
                                                <img
                                                    loading="lazy"
                                                    className="h-auto"
                                                    src="../images/products/product_0-2.jpg"
                                                    width={674}
                                                    height={674}
                                                    alt=""
                                                />
                                                <a
                                                    data-fancybox="gallery"
                                                    href="../images/products/product_0-2.jpg"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title=""
                                                    data-bs-original-title="Zoom"
                                                >
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_zoom" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide product-single__image-item"
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 534, marginRight: 32 }}
                                            >
                                                <img
                                                    loading="lazy"
                                                    className="h-auto"
                                                    src="../images/products/product_0-3.jpg"
                                                    width={674}
                                                    height={674}
                                                    alt=""
                                                />
                                                <a
                                                    data-fancybox="gallery"
                                                    href="../images/products/product_0-3.jpg"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title=""
                                                    data-bs-original-title="Zoom"
                                                >
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_zoom" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-button-prev swiper-button-disabled"
                                            tabIndex={-1}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-ab4afd456f3d54e9"
                                            aria-disabled="true"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </div>
                                        <div
                                            className="swiper-button-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-ab4afd456f3d54e9"
                                            aria-disabled="false"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </div>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                </div>
                                <div className="product-single__thumbnail">
                                    <div className="swiper-container swiper-container-initialized swiper-container-vertical swiper-container-pointer-events swiper-container-free-mode swiper-container-thumbs">
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-9791d864e8fba10ef"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                height: "78.9219px"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide product-single__image-item swiper-slide-active swiper-slide-thumb-active"
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ height: 89 }}
                                            >
                                                <img
                                                    loading="lazy"
                                                    className="h-auto"
                                                    src={prd.ProductImage}
                                                    width={104}
                                                    height={104}
                                                    alt=""
                                                />
                                            </div>


                                        </div>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex justify-content-between mb-4 pb-md-2">
                                <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
                                    <a
                                        href="#"
                                        className="menu-link menu-link_us-s text-uppercase fw-medium"
                                    >
                                        Home
                                    </a>
                                    <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
                                        /
                                    </span>
                                    <a
                                        href="#"
                                        className="menu-link menu-link_us-s text-uppercase fw-medium"
                                    >
                                        The Shop
                                    </a>
                                </div>
                                {/* /.breadcrumb */}
                                <div className="product-single__prev-next d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
                                    <a
                                        href="product2_variable.html"
                                        className="text-uppercase fw-medium"
                                    >
                                        <svg
                                            className="mb-1px"
                                            width={10}
                                            height={10}
                                            viewBox="0 0 25 25"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <use href="#icon_prev_md" />
                                        </svg>
                                        <span className="menu-link menu-link_us-s">Prev</span>
                                    </a>
                                    <a
                                        href="product4_grouped.html"
                                        className="text-uppercase fw-medium"
                                    >
                                        <span className="menu-link menu-link_us-s">Next</span>
                                        <svg
                                            className="mb-1px"
                                            width={10}
                                            height={10}
                                            viewBox="0 0 25 25"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <use href="#icon_next_md" />
                                        </svg>
                                    </a>
                                </div>
                                {/* /.shop-acs */}
                            </div>
                            <h1 className="product-single__name">
                                {prd.ProductName}
                            </h1>
                            <div className="product-single__rating">
                                <div className="reviews-group d-flex">
                                    <svg
                                        className="review-star"
                                        viewBox="0 0 9 9"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_star" />
                                    </svg>
                                    <svg
                                        className="review-star"
                                        viewBox="0 0 9 9"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_star" />
                                    </svg>
                                    <svg
                                        className="review-star"
                                        viewBox="0 0 9 9"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_star" />
                                    </svg>
                                    <svg
                                        className="review-star"
                                        viewBox="0 0 9 9"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_star" />
                                    </svg>
                                    <svg
                                        className="review-star"
                                        viewBox="0 0 9 9"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_star" />
                                    </svg>
                                </div>
                                <span className="reviews-note text-lowercase text-secondary ms-1">
                                    8k+ reviews
                                </span>
                            </div>
                            <div className="product-single__price">
                                <span className="to-price">$ {prd.ProductPrice}</span>
                            </div>
                            <div className="product-single__short-desc">
                                <p>
                                    {prd.ProductDecription}
                                </p>
                            </div>

                            <div className="product-single__addtocart">
                                <button
                                    className="btn btn-primary btn-addtocart"
                                    onClick={() => {
                                        insertCart()
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>

                            <div className="product-single__addtolinks">
                                <a href="#" className="menu-link menu-link_us-s add-to-wishlist">
                                    <svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_heart" />
                                    </svg>
                                    <span>Add to Wishlist</span>
                                </a>
                                <share-button className="share-button">
                                    <button className="menu-link menu-link_us-s to-share border-0 bg-transparent d-flex align-items-center">
                                        <svg
                                            width={16}
                                            height={19}
                                            viewBox="0 0 16 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <use href="#icon_sharing" />
                                        </svg>
                                        <span>Share</span>
                                    </button>
                                    <details
                                        id="Details-share-template__main"
                                        className="m-1 xl:m-1.5"
                                        hidden=""
                                    >
                                        <summary className="btn-solid m-1 xl:m-1.5 pt-3.5 pb-3 px-5">
                                            +
                                        </summary>
                                        <div
                                            id="Article-share-template__main"
                                            className="share-button__fallback flex items-center absolute top-full left-0 w-full px-2 py-4 bg-container shadow-theme border-t z-10"
                                        >
                                            <div className="field grow mr-4">
                                                <label className="field__label sr-only" htmlFor="url">
                                                    Link
                                                </label>
                                                <input
                                                    type="text"
                                                    className="field__input w-full"
                                                    id="url"
                                                    defaultValue="https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health"
                                                    placeholder="Link"
                                                    onclick="this.select();"
                                                    readOnly=""
                                                />
                                            </div>
                                            <button className="share-button__copy no-js-hidden">
                                                <svg
                                                    className="icon icon-clipboard inline-block mr-1"
                                                    width={11}
                                                    height={13}
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    viewBox="0 0 11 13"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M2 1a1 1 0 011-1h7a1 1 0 011 1v9a1 1 0 01-1 1V1H2zM1 2a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H1zm0 10V3h7v9H1z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <span className="sr-only">Copy link</span>
                                            </button>
                                        </div>
                                    </details>
                                </share-button>
                            </div>
                            <div className="product-single__meta-info">
                                <div className="meta-item">
                                    <label>SKU:</label>
                                    <span>N/A</span>
                                </div>
                                <div className="meta-item">
                                    <label>Categories:</label>
                                    <span>Casual &amp; Urban Wear, Jackets, Men</span>
                                </div>
                                <div className="meta-item">
                                    <label>Tags:</label>
                                    <span>biker, black, bomber, leather</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-single__details-tab">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link nav-link_underscore active"
                                    id="tab-description-tab"
                                    data-bs-toggle="tab"
                                    href="#tab-description"
                                    role="tab"
                                    aria-controls="tab-description"
                                    aria-selected="true"
                                >
                                    Description
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link nav-link_underscore"
                                    id="tab-additional-info-tab"
                                    data-bs-toggle="tab"
                                    href="#tab-additional-info"
                                    role="tab"
                                    aria-controls="tab-additional-info"
                                    aria-selected="false"
                                >
                                    Additional Information
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link nav-link_underscore"
                                    id="tab-reviews-tab"
                                    data-bs-toggle="tab"
                                    href="#tab-reviews"
                                    role="tab"
                                    aria-controls="tab-reviews"
                                    aria-selected="false"
                                >
                                    Reviews (2)
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="tab-description"
                                role="tabpanel"
                                aria-labelledby="tab-description-tab"
                            >
                                <div className="product-single__description">
                                    <h3 className="block-title mb-4">
                                        Sed do eiusmod tempor incididunt ut labore
                                    </h3>
                                    <p className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                                        ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                                        dicta sunt explicabo.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3 className="block-title">Why choose product?</h3>
                                            <ul className="list text-list">
                                                <li>Creat by cotton fibric with soft and smooth</li>
                                                <li>
                                                    Simple, Configurable (e.g. size, color, etc.), bundled
                                                </li>
                                                <li>Downloadable/Digital Products, Virtual Products</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="block-title">Sample Number List</h3>
                                            <ol className="list text-list">
                                                <li>Create Store-specific attrittbutes on the fly</li>
                                                <li>
                                                    Simple, Configurable (e.g. size, color, etc.), bundled
                                                </li>
                                                <li>Downloadable/Digital Products, Virtual Products</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <h3 className="block-title mb-0">Lining</h3>
                                    <p className="content">100% Polyester, Main: 100% Polyester.</p>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tab-additional-info"
                                role="tabpanel"
                                aria-labelledby="tab-additional-info-tab"
                            >
                                <div className="product-single__addtional-info">
                                    <div className="item">
                                        <label className="h6">Weight</label>
                                        <span>1.25 kg</span>
                                    </div>
                                    <div className="item">
                                        <label className="h6">Dimensions</label>
                                        <span>90 x 60 x 90 cm</span>
                                    </div>
                                    <div className="item">
                                        <label className="h6">Size</label>
                                        <span>XS, S, M, L, XL</span>
                                    </div>
                                    <div className="item">
                                        <label className="h6">Color</label>
                                        <span>Black, Orange, White</span>
                                    </div>
                                    <div className="item">
                                        <label className="h6">Storage</label>
                                        <span>Relaxed fit shirt-style dress with a rugged</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tab-reviews"
                                role="tabpanel"
                                aria-labelledby="tab-reviews-tab"
                            >
                                <h2 className="product-single__reviews-title">Reviews</h2>
                                <div className="product-single__reviews-list">
                                    <div className="product-single__reviews-item">
                                        <div className="customer-avatar">
                                            <img loading="lazy" src="../images/avatar.jpg" alt="" />
                                        </div>
                                        <div className="customer-review">
                                            <div className="customer-name">
                                                <h6>Janice Miller</h6>
                                                <div className="reviews-group d-flex">
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="review-date">April 06, 2023</div>
                                            <div className="review-text">
                                                <p>
                                                    Nam libero tempore, cum soluta nobis est eligendi optio
                                                    cumque nihil impedit quo minus id quod maxime placeat facere
                                                    possimus, omnis voluptas assumenda est…
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-single__reviews-item">
                                        <div className="customer-avatar">
                                            <img loading="lazy" src="../images/avatar.jpg" alt="" />
                                        </div>
                                        <div className="customer-review">
                                            <div className="customer-name">
                                                <h6>Benjam Porter</h6>
                                                <div className="reviews-group d-flex">
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                    <svg
                                                        className="review-star"
                                                        viewBox="0 0 9 9"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <use href="#icon_star" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="review-date">April 06, 2023</div>
                                            <div className="review-text">
                                                <p>
                                                    Nam libero tempore, cum soluta nobis est eligendi optio
                                                    cumque nihil impedit quo minus id quod maxime placeat facere
                                                    possimus, omnis voluptas assumenda est…
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-single__review-form">
                                    <form name="customer-review-form">
                                        <h5>Be the first to review “Message Cotton T-Shirt”</h5>
                                        <p>
                                            Your email address will not be published. Required fields are
                                            marked *
                                        </p>
                                        <div className="select-star-rating">
                                            <label>Your rating *</label>
                                            <span className="star-rating">
                                                <svg
                                                    className="star-rating__star-icon"
                                                    width={12}
                                                    height={12}
                                                    fill="#ccc"
                                                    viewBox="0 0 12 12"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                                                </svg>
                                                <svg
                                                    className="star-rating__star-icon"
                                                    width={12}
                                                    height={12}
                                                    fill="#ccc"
                                                    viewBox="0 0 12 12"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                                                </svg>
                                                <svg
                                                    className="star-rating__star-icon"
                                                    width={12}
                                                    height={12}
                                                    fill="#ccc"
                                                    viewBox="0 0 12 12"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                                                </svg>
                                                <svg
                                                    className="star-rating__star-icon"
                                                    width={12}
                                                    height={12}
                                                    fill="#ccc"
                                                    viewBox="0 0 12 12"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                                                </svg>
                                                <svg
                                                    className="star-rating__star-icon"
                                                    width={12}
                                                    height={12}
                                                    fill="#ccc"
                                                    viewBox="0 0 12 12"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                                                </svg>
                                            </span>
                                            <input type="hidden" id="form-input-rating" defaultValue="" />
                                        </div>
                                        <div className="mb-4">
                                            <textarea
                                                id="form-input-review"
                                                className="form-control form-control_gray"
                                                placeholder="Your Review"
                                                cols={30}
                                                rows={8}
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="form-label-fixed mb-4">
                                            <label htmlFor="form-input-name" className="form-label">
                                                Name *
                                            </label>
                                            <input
                                                id="form-input-name"
                                                className="form-control form-control-md form-control_gray"
                                            />
                                        </div>
                                        <div className="form-label-fixed mb-4">
                                            <label htmlFor="form-input-email" className="form-label">
                                                Email address *
                                            </label>
                                            <input
                                                id="form-input-email"
                                                className="form-control form-control-md form-control_gray"
                                            />
                                        </div>
                                        <div className="form-check mb-4">
                                            <input
                                                className="form-check-input form-check-input_fill"
                                                type="checkbox"
                                                defaultValue=""
                                                id="remember_checkbox"
                                            />
                                            <label className="form-check-label" htmlFor="remember_checkbox">
                                                Save my name, email, and website in this browser for the next
                                                time I comment.
                                            </label>
                                        </div>
                                        <div className="form-action">
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products-carousel container">
                    <h2 className="h3 text-uppercase mb-4 pb-xl-2 mb-xl-4">
                        Related <strong>Products</strong>
                    </h2>
                    <div id="related_products" className="position-relative">
                        <div
                            className="swiper-container js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                            data-settings='{
      "autoplay": false,
      "slidesPerView": 4,
      "slidesPerGroup": 4,
      "effect": "none",
      "loop": true,
      "pagination": {
        "el": "#related_products .products-pagination",
        "type": "bullets",
        "clickable": true
      },
      "navigation": {
        "nextEl": "#related_products .products-carousel__next",
        "prevEl": "#related_products .products-carousel__prev"
      },
      "breakpoints": {
        "320": {
          "slidesPerView": 2,
          "slidesPerGroup": 2,
          "spaceBetween": 14
        },
        "768": {
          "slidesPerView": 3,
          "slidesPerGroup": 3,
          "spaceBetween": 24
        },
        "992": {
          "slidesPerView": 4,
          "slidesPerGroup": 4,
          "spaceBetween": 30
        }
      }
    }'
                        >
                            <div
                                className="swiper-wrapper"
                                id="swiper-wrapper-ca579f6173b9b71e"
                                aria-live="polite"
                                style={{
                                    transitionDuration: "0ms",
                                    transform: "translate3d(-1140px, 0px, 0px)"
                                }}
                            >
                                <div
                                    className="swiper-slide product-card swiper-slide-duplicate"
                                    data-swiper-slide-index={4}
                                    role="group"
                                    aria-label="1 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_7.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_7-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Cotton Jersey T-Shirt</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$17</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-duplicate"
                                    data-swiper-slide-index={5}
                                    role="group"
                                    aria-label="2 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_4.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_4-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Cableknit Shawl</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price price-old">$129</span>
                                            <span className="money price price-sale">$99</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-duplicate"
                                    data-swiper-slide-index={6}
                                    role="group"
                                    aria-label="3 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_5.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_5-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Colorful Jacket</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$29</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-duplicate swiper-slide-prev"
                                    data-swiper-slide-index={7}
                                    role="group"
                                    aria-label="4 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_8.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_8-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Zessi Dresses</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price price-old">$129</span>
                                            <span className="money price price-sale">$99</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-active"
                                    data-swiper-slide-index={0}
                                    role="group"
                                    aria-label="5 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_3.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_3-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Kirby T-Shirt</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$17</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-next"
                                    data-swiper-slide-index={1}
                                    role="group"
                                    aria-label="6 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_1-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Cropped Faux Leather Jacket</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$29</span>
                                        </div>
                                        <div className="product-card__review d-flex align-items-center">
                                            <div className="reviews-group d-flex">
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                            </div>
                                            <span className="reviews-note text-lowercase text-secondary ms-1">
                                                8k+ reviews
                                            </span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    data-swiper-slide-index={2}
                                    role="group"
                                    aria-label="7 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_2.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_2-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Calvin Shorts</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$62</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    data-swiper-slide-index={3}
                                    role="group"
                                    aria-label="8 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_6.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_6-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">
                                                Shirt In Botanical Cheetah Print
                                            </a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$62</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    data-swiper-slide-index={4}
                                    role="group"
                                    aria-label="9 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_7.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_7-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Cotton Jersey T-Shirt</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$17</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    data-swiper-slide-index={5}
                                    role="group"
                                    aria-label="10 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_4.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_4-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Cableknit Shawl</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price price-old">$129</span>
                                            <span className="money price price-sale">$99</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    data-swiper-slide-index={6}
                                    role="group"
                                    aria-label="11 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_5.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_5-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Colorful Jacket</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$29</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-duplicate-prev"
                                    data-swiper-slide-index={7}
                                    role="group"
                                    aria-label="12 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_8.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_8-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Zessi Dresses</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price price-old">$129</span>
                                            <span className="money price price-sale">$99</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-duplicate swiper-slide-duplicate-active"
                                    data-swiper-slide-index={0}
                                    role="group"
                                    aria-label="13 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_3.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_3-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Kirby T-Shirt</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$17</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-duplicate swiper-slide-duplicate-next"
                                    data-swiper-slide-index={1}
                                    role="group"
                                    aria-label="14 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_1-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Cropped Faux Leather Jacket</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$29</span>
                                        </div>
                                        <div className="product-card__review d-flex align-items-center">
                                            <div className="reviews-group d-flex">
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                                <svg
                                                    className="review-star"
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_star" />
                                                </svg>
                                            </div>
                                            <span className="reviews-note text-lowercase text-secondary ms-1">
                                                8k+ reviews
                                            </span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-duplicate"
                                    data-swiper-slide-index={2}
                                    role="group"
                                    aria-label="15 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_2.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_2-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">Calvin Shorts</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$62</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card swiper-slide-duplicate"
                                    data-swiper-slide-index={3}
                                    role="group"
                                    aria-label="16 / 16"
                                    style={{ width: 255, marginRight: 30 }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_6.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
                                            />
                                            <img
                                                loading="lazy"
                                                src="../images/products/product_6-1.jpg"
                                                width={330}
                                                height={400}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img pc__img-second"
                                            />
                                        </a>
                                        <button
                                            className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="pc__info position-relative">
                                        <p className="pc__category">Dresses</p>
                                        <h6 className="pc__title">
                                            <a href="product1_simple.html">
                                                Shirt In Botanical Cheetah Print
                                            </a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$62</span>
                                        </div>
                                        <button
                                            className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* /.swiper-wrapper */}
                            <span
                                className="swiper-notification"
                                aria-live="assertive"
                                aria-atomic="true"
                            />
                        </div>
                        {/* /.swiper-container js-swiper-slider */}
                        <div
                            className="products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center"
                            tabIndex={0}
                            role="button"
                            aria-label="Previous slide"
                            aria-controls="swiper-wrapper-ca579f6173b9b71e"
                        >
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <use href="#icon_prev_md" />
                            </svg>
                        </div>
                        {/* /.products-carousel__prev */}
                        <div
                            className="products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center"
                            tabIndex={0}
                            role="button"
                            aria-label="Next slide"
                            aria-controls="swiper-wrapper-ca579f6173b9b71e"
                        >
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <use href="#icon_next_md" />
                            </svg>
                        </div>
                        {/* /.products-carousel__next */}
                        <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center swiper-pagination-clickable swiper-pagination-bullets">
                            <span
                                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 1"
                            />
                            <span
                                className="swiper-pagination-bullet"
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 2"
                            />
                        </div>
                        {/* /.products-pagination */}
                    </div>
                    {/* /.position-relative */}
                </section>
                {/* /.products-carousel container */}
            </main>



        </>
    )
}

export default ProductDetails