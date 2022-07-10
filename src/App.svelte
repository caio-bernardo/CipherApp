<script>
  import logo from './assets/svelte.png'
  import Form from './lib/Form.svelte'
</script>

<main>
  <section>
    <h1>CipherApp</h1>
    
    <p>Traduza mensagens encriptadas ou encripte suas mensagens.</p>
  </section>
    
  <Form />
  
  <textarea readonly name="input-msg" id="output-msg" cols="50" rows="10"></textarea>

</main>