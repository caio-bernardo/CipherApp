<script>
  import SelectOpt from './SelectOpt.svelte'

</script>

<form action="">

  <SelectOpt />
  <br>
    
  <label for="input-msg">Insira a mensage:</label>
  <br>
  <textarea name="input-msg" id="input-msg" cols="50" rows="10"></textarea>

  <br>
  <button>Encriptar</button>
  <button>Desencriptar</button>

</form>