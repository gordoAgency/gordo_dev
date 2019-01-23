<template lang="html">
  <div class="gordo-contact container">
  <h1>Contact</h1>
  <p>How we can help you?</p>
  <p>  Send email or call</p>
    <hr>
    <div class="form-group">
      <label for="email">Mail</label>
      <input type="text" v-model="user.email" name="email" class="form-control">
    </div>
    <div class="form-group">
      <label for="email">Mail</label>
      <input type="text" v-model="user.email" name="email" class="form-control">
    </div>
    <div class="form-group">
      <label for="email">company</label>
      <input type="text" v-model="user.company" name="company" class="form-control">
    </div>
    <div class="form-group">
      <label for="subject">Subject</label>
      <input type="text" v-model="user.subject" name="subject" class="form-control">
    </div>
    <hr>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea type="text" v-model="user.message" name="message" class="form-control"></textarea>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="form-group">
                <label for="sendmail">
                    <input
                            type="checkbox"
                            id="sendmail"
                            value="SendMail"> Send Mail
                </label>
                <label for="sendInfomail">
                    <input
                            type="checkbox"
                            id="sendInfomail"
                            value="SendInfoMail"> Send Infomail
                </label>
            </div>

        </div>
    </div>

    <button type="button" name="button" class="btn btn-primary">Wyślij</button>

    <hr>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4>Your Data</h4>
                </div>
                <div class="panel-body">
                    <p>Mail: {{user.email}}</p>
                    <p>Company: {{user.company}}</p>
                    <p>Subject: {{user.subject}}</p>
                    <p style="white-space: pre" >Message: {{user.message}}</p>
                    <p>Message: </p>
                    <p><strong>Send Mail?</strong></p>
                    <ul>
                        <li></li>
                    </ul>
                    <p>Gender:</p>
                    <p>Priority:</p>
                    <p>Switched:</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        user: {
          email: '',
          subject: '',
          message: 'Wpisz tutuaj wiadomosc',
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gordo-contact{
    // margin: 100px 0;
  }
  h1{
    font-family: Staatliches, sans-serif;
  }
  form{
    margin: 50px 0;
    input{
      margin: 10px auto;
      padding: 15px;
      display:block;
    }
  }
</style>
