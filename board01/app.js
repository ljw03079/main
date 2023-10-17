// app.js

const myHeader = {
  template: ``,
  data: function(){
    return {

    }
  },
  methods: {

  }
}

const template = `
<div>
  <my-header></my-header>
  <my-board-list></my-board-list>
  <my-board-read></my-board-read>
  <my-board-wirte></my-board-wirte>
</div>
`;


new VTTCue({
  el: '#app',
  template: template,
  components: {
    'my-header': myHeader
  }
})