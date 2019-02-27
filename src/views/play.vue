<template>
<b-container fluid>
  <div id="playground">
    <div class="about">
    <h3>This is an Play ground page. </h3>
  </div>

<b-row>

<b-col>
      <div> 
        <b-card
        title="Modal Example"
        img-src="https://picsum.photos/200/100/?image=20"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2" >
        <b-card-text>
          modal example 
        </b-card-text>
        <b-button @click="navigate()" variant="outline-primary">Open</b-button>
        
        </b-card>
      </div>
</b-col>

<b-col>
      <div> 
        <b-card
        title="Tab Example"
        img-src="https://picsum.photos/200/100/?image=23"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2" >
        <b-card-text>
          modal example 
        </b-card-text>
        <b-button href="/model" variant="outline-primary">download code</b-button>
        </b-card>
      </div>
</b-col>

<b-col>
      <div> 
        <b-card
        title="Modal Example"
        img-src="https://picsum.photos/200/100/?image=24"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2" >
        <b-card-text>
          modal example 
        </b-card-text>

        <b-button href="/model" variant="outline-primary">download code</b-button>
        </b-card>
      </div>
</b-col>

<b-col>
      <div> 
        <b-card
        title="Table Example"
        img-src="https://picsum.photos/200/100/?image=26"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2" >
        <b-card-text>
          modal example 
        </b-card-text>

        <b-button href="/model" variant="outline-primary">download code</b-button>
        </b-card>
      </div>
   </b-col>
 </b-row>


<b-row>

<b-col>
      <div> 
        <b-card
        title="Tab Example"
        img-src="https://picsum.photos/200/100/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2" >
        <b-card-text>
          modal example 
        </b-card-text>
        <b-button href="/model" variant="outline-primary">download code</b-button>
        </b-card>
      </div>
</b-col>

<b-col>
      <div> 
        <b-card
        title="Tab Example"
        img-src="https://picsum.photos/200/100/?image=28"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2" >
        <b-card-text>
          modal example 
        </b-card-text>
        <b-button href="/model" variant="outline-primary">download code</b-button>
        </b-card>
      </div>
</b-col>

<b-col>
      <div> 
        <b-card
        title="Modal Example"
        img-src="https://picsum.photos/200/100/?image=29"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2" >
        <b-card-text>
          modal example 
        </b-card-text>

        <b-button href="/model" variant="outline-primary">download code</b-button>
        </b-card>
      </div>
</b-col>

<b-col>
      <div> 
        <b-card
        title="Table Example"
        img-src="https://picsum.photos/200/100/?image=21"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2" >
        <b-card-text>
          modal example 
        </b-card-text>

        <b-button href="/model" variant="outline-primary">download code</b-button>
        </b-card>
      </div>
   </b-col>
 </b-row>
</div>
</b-container>       
</template>


<script>
// @ is an alias to /src
import ModalIndex from '@/components/modal/ModalIndex.vue'

export default {
  name: 'ModalIndex',
  components: {
    ModalIndex
  },

  methods: {
            navigate() {
                this.$router.push({ name: "ModalIndex" });
            }
        }


}
</script>