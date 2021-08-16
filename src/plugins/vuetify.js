import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        
        primary: '#102E5A',
        primary_text: '#F3F2F3',
        secondary: '#69BDCB',
        secondary_text: '#102E5A',
        border_color: '#6D9FB5',
        error: '#F44336',
        font_color: '#102E5A'
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
});
