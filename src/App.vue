<template>
	<div id="app">
		<header-logo></header-logo>
		<div class="page">
			<router-view/>
		</div>
		<footer-menu></footer-menu>
	</div>
</template>

<script>
import HeaderLogo from './components/HeaderLogo'
import FooterMenu from './components/FooterMenu'

export default {
  name: 'App',
  components: {
    FooterMenu,
    HeaderLogo
  }
}
</script>
