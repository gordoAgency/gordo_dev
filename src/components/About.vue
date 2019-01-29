<template lang="html">
  <div class="gordo-about row">
    <div class="gal col-md-6">
    <h1>WHO WE ARE?</h1>
    <h3>Jesteśmy agencją kreatywno-strategiczną. Specjalizujemy się w digitalu.</h3>
    <p>Jeśli znasz hiszpański, to pierwszym skojarzeniem dla Ciebie będzie bezpośrednie tłumaczenie tego wyrazu, który oznacza TŁUSZCZ.  I bardzo dobrze, bo interesują nas duże, solidne projekty, w których możemy się wykazać i pokazać pełen wachlarz naszych kompetencji.</p>
    <p>Warto też pamiętać, że Gordo to również pierwsza w historii małpka wystrzelona w przestrzeń kosmiczną. Udowodniła ona, że duże przyspieszenie i przebywanie na znacznej wysokości nie wywołuje negatywnych skutków dla organizmu. Dzięki czemu ekspansja kosmosu stała się możliwa.</p>
    <p>Jej historia jest dla nas inspiracją do podejmowania odważnych działań, ponieważ są one w stanie zagwarantować sukces.</p>
    <p>Wierzymy, że wszelki postęp możliwy jest dzięki naszej ciężkiej pracy, mądrym, a zarazem odważnym decyzjom. Nie boimy się nowatorskich rozwiązań, ponieważ wiemy, że dzięki nim nasi Klienci są w stanie wznieść się wysoko i odnieść rynkowe zwycięstwo.</p>
    </div>
    <div class="gar col-md-6">`
    </div> 
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .gordo-about{
    display: block;
    height: auto;
  }
  h1{
    margin-top:  1em;
    font-size: 4em;
    font-family: Staatliches, sans-serif;
    // font-family: 'Rewir-Light', sans-serif;
    // font-weight: bold;
    text-align: center;
    color: black;
  }
  h3{
    color: red;
    margin-top:  1em;
  }
  p{
    margin-top:  2em;
  }
  .gal{
    display: block;
    padding: 15vh 1em;
    margin:1;
  }
  .gar{
    display: block;
    background: url('../assets/head.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 95vh ;
  }
</style>
