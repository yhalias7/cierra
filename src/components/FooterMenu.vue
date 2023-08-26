<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <ul class="footer-menu">
            <li v-for="item in menuItems" :key="item.id">
              <a :href="item.link" class="footer-link">{{ item.text }}</a>
            </li>
          </ul>
          <p class="footer-text">© 2023 <a href="#">Cierra</a>. Made with ♥ in Göttingen.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { id: 1, text: 'Cierra', link: '#' },
          { id: 2, text: 'Imprint', link: '#' },
          { id: 3, text: 'Datenschutzerklärung', link: '#' },
          { id: 4, text: 'Jobs', link: '#' },
          { id: 5, text: 'Cookies verwalten', link: '#' }
        ]
      };
    }
  };
  </script>
  
<style scoped>
.footer {
  padding: 30px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}

.footer-menu li {
  display: inline-block;
  margin-right: 20px;
}

.footer-link {
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.03em;
  text-align: left;
  text-decoration: none;
  color: rgba(72, 101, 129, 1);
}

.footer-link:hover {
  color: #007bff;
}

.footer-text {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: linear-gradient(0deg, #486581, #486581),
linear-gradient(0deg, #F35627, #F35627);

}
.footer-text a {
  color: #F35627;
  text-decoration: none;
}
</style>