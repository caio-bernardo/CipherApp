<script>
  import ciphers from './lib/cipher_functions'
  
  let response;
  let selected;
  let description = ciphers[0].desc;

  function handleSubmit(fdata) {
    const formData = new FormData(fdata.target);
    
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
  }

</script>


<main>

  <header>
    <h1>CipherApp</h1>
    <p>Encripte e desencripte mensagens usando suas cifras favoritas.</p>
  </header>
  
  <form on:submit|preventDefault="{handleSubmit}">
    <!--TODO Add labels-->
    <select bind:value="{selected}" on:change="{() => {description = selected.desc}}" name="selectCipher" id="selectCipher">
      {#each ciphers as cipher}
        <option value="{cipher}">{cipher.name}</option>
      {/each}
    </select>
    
    {@html description? description : ""}
    
    <input type="text" name="key">
    
    <textarea name="inmsg" id="inmsg" cols="80" rows="10"></textarea>

    <button type="submit">Encriptar</button>
    <button>Desencriptar</button>

  </form>

  <textarea readonly name="outmsg" id="outmsg" cols="80" rows="10">{response}</textarea>

</main>