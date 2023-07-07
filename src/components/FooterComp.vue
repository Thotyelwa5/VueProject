<template>

        
  <footer class="footer text-center mt-5" style="background-color: rgb(178, 173, 173);">
    <div class="social-icons">
      <a href="https://www.facebook.com/login/device-based/regular/login/?login_attempt=1" target="_blank"
        rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
      </a>
      <a href="https://www.linkedin.com/in/thotyelwa-mpongwana-134944195/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin"
          viewBox="0 0 16 16">
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </a>
      <a href="https://github.com/Thotyelwa5?tab=repositories" target="_blank" rel="noopener noreferrer">
        <svg class="bi bi-github" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.49-.94-.84-1.13-.29-.14-.71-.49-.01-.5.66-.01 1.13.61 1.28.87.75 1.26 1.95.9 2.43.68.07-.52.29-.9.53-1.11-1.86-.21-3.82-.93-3.82-4.13 0-.91.32-1.65.85-2.23-.09-.21-.37-1.05.08-2.19 0 0 .69-.22 2.27.85.66-.18 1.37-.27 2.08-.27s1.42.09 2.08.27c1.58-1.07 2.27-.85 2.27-.85.45 1.14.17 1.98.08 2.19.53.58.85 1.32.85 2.23 0 3.2-1.96 3.92-3.83 4.13.3.26.57.77.57 1.56 0 1.13-.01 2.04-.01 2.31 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
    </div>
    <p>Email: mpongwanathotyelwa@gmail.com</p>
    <p>Phone: 0653477406</p>
    <p>Copyright &copy; 2023</p>
  </footer>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.footer {
    background-color: rgb(178, 173, 173);
    text-align: center;
    margin-top: 5rem;
    padding: 1rem;
    }
  
  
  .social-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    animation: bounce; 
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .social-icons a {
    display: inline-block;
    margin: 0 0.5rem;
    color: #000;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #0d6efd;
  }
  
  p {
    margin-bottom: 0.5rem;
  }
</style>