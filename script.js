body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #001f4d, #b3d9ff);
  overflow-x: hidden;
}

.top-bar {
  background-color: #001f4d;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: height 0.3s, opacity 0.5s;
}

.top-bar-content {
  display: none;
  justify-content: space-between;
  font-weight: bold;
}

.top-bar.expanded {
  height: 100px;
}

.top-bar.expanded .top-bar-content {
  display: flex;
}

.main-content {
  margin-top: 120px;
}

.product-section {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 40px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.product-text, .product-image {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}

.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
