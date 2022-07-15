<script>
  import Form from './lib/Form.svelte';
  
  let response;
  

</script>


<main>

  <header>
    <h1>CipherApp</h1>
    <p>Encripte e desencripte mensagens usando suas cifras favoritas.</p>
  </header>
  
  <Form />

  <textarea readonly name="outmsg" id="outmsg" cols="80" rows="10">{response}</textarea>

</main>