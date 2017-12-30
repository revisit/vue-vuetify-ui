<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      hide-overlay
      height=80%
      style="opacity: 0.8">

      <!-- Select Model -->
      <v-container fluid>
        <v-layout row wrap align-center>
          <v-flex xs6>
            <v-subheader>Object</v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-select @change="objectSelectionChange"
              label="Select"
              v-bind:items="objects"
              v-model="selectedObject"
              item-text="name"
              item-value="name"
              single-line
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <chrome-picker v-model="colors" style="margin: 0 auto;"></chrome-picker>
          </v-flex>
        </v-layout>
      </v-container>

    </v-navigation-drawer>

    <canvas ref="canvas"></canvas>

    <v-bottom-nav absolute :value="true" color="transparent">
      <v-card color="white" raised id="player">

        <v-container justify-space-between fill-height class="pa-0">
          <v-layout row align-center id="player">
            <v-flex xs1 class="text-xs-center">
              <v-btn flat v-on:click="isPlaying = !isPlaying">
                <v-icon v-if="isPlaying">pause</v-icon>
                <v-icon v-else="isPlaying">play_arrow</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs1 class="text-xs-center">
              <span>{{speed | formatSpeed}}</span>
            </v-flex>
            <v-flex xs2 class="text-xs-center">
              <input id="speed-slider" type="range" name="playback-speed-slider" min="-5" max="5" step="0.5" v-model.number="speed">
            </v-flex>
            <v-flex xs1 class="text-xs-center">
              <v-btn flat v-on:click="time = 0">
                <v-icon>replay</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs1 class="text-xs-center">
              <span>{{time | formatTime}}</span>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <input id="timeline-slider" type="range" name="timeline-slider" min="0" max="10" step="0.01" v-model.number="time">
            </v-flex>
            <v-flex xs1 class="text-xs-center">
              <span>{{timeEnd | formatTime}}</span>
            </v-flex>
            <v-flex xs1 class="text-xs-center">
              <v-btn flat @click.stop="drawer = !drawer">
                <v-icon>settings</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>

      </v-card>
    </v-bottom-nav>

  </v-app>
</template>

<script>
  import { Chrome } from 'vue-color';

  export default {
    data() {
      return {
        isPlaying: false,
        speed: 1,
        timeEnd: 10.0,
        time: 0,
        drawer: null,
        selectedObject: null,
        objects: [
          { header: 'Environment' },
          { group: 'Environment', name: 'Background' },
          { divider: true },
          { header: 'Scene' },
          { group: 'Scene', name: 'Box' },
        ],
        scene: {
          Background: { color: '#770000', opacity: 0.75 },
          Box: { color: '#007700', opacity: 0.5 },
        },
        colors: {
          hex: '#194d33',
          a: 1,
        },
      };
    },
    mounted() {
      // Determine the width and height of the renderer wrapper element.
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      const rectSize = 50;
      const updatePeriod = 1 / 60;

      const timeline = document.getElementById('timeline-slider');
      let changing = false;
      timeline.addEventListener('mousedown', () => { changing = true; });
      timeline.addEventListener('mouseup', () => { changing = false; });

      const self = this;

      function draw() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // eslint-disable-next-line
        // console.log(self.selectedObject);

        if (self.selectedObject) {
          self.scene[self.selectedObject].color = self.colors.hex;
          self.scene[self.selectedObject].opacity = self.colors.a;
        }

        ctx.fillStyle = self.scene.Background.color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = self.scene.Box.color;
        ctx.fillRect(canvas.width * (self.time / self.timeEnd),
          (canvas.height - rectSize) / 2.0, rectSize, rectSize);
      }

      function update() {
        if (!changing && self.isPlaying) {
          self.time += updatePeriod * self.speed;
          if (self.time > self.timeEnd) {
            self.time = 0;
          } else if (self.time < 0) {
            self.time = self.timeEnd;
          }
        }
        draw();
      }

      setInterval(update, updatePeriod * 1000);
    },
    methods: {
      objectSelectionChange(selection) {
        this.colors = {
          hex: this.scene[selection].color,
          a: this.scene[selection].opacity,
        };
      },
    },
    filters: {
      formatTime(t) {
        return t.toFixed(2);
      },
      formatSpeed(s) {
        return `x ${s.toFixed(1)}`;
      },
    },
    components: {
      'chrome-picker': Chrome,
    },
  };
</script>

<style>

canvas {
  width: 100%;
  height: 100%;
}

#player {
  width:100%;
  max-width:600px;
  line-height: 0;
}

#player .btn {
  min-width: 0;
}

#player .input-group__details {
  min-height: 0;
  padding: 0;
  margin: 0;
}

#player input {
  text-align: center;
  width: 100%;
}

#player .btn__content {
  padding: 0;
}

input[type=range]::-moz-focus-outer {
  border: 0;
}

@media (max-width: 600px) {
  #player {
    font-size: calc(10px + 9 * ( (100vw - 420px) / 860));
  }
}

</style>
