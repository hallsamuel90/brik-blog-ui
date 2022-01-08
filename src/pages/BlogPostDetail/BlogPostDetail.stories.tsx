import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogPostDetail } from '.';

export default {
  title: 'Pages/BlogPostDetail',
  component: BlogPostDetail,
  argTypes: {},
} as ComponentMeta<typeof BlogPostDetail>;

const Template: ComponentStory<typeof BlogPostDetail> = (args) => (
  <BlogPostDetail {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  blogPost: {
    id: 'awesome-blog-post-about-bean-baggz',
    title: 'Awesome Blog Post about Bean Baggz',
    preview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    author: 'Sam Hall',
    publishDate: 'Dec 15, 2021',
    link: '/blog-posts/tdd-why-should-i.md',
    image: {
      location: '/assets/feet-up.png',
      description: 'feet-up',
    },
  },
  content: `
  # Ichnobatesque illis everberat sulphure ostendere pharetras virgineo

  ## Manifesta etiam mox me natos praedator hostem
  
  Lorem markdownum summum: menti enim ipsa magna naturale silicem viri est locus,
  parvos. Est omnis, e superi? Per orbes est pedesque de terras umbrosa tam, passa
  casus digitique senatum passu? Sed ille, heu annos decerpserat clipei secedere
  nocens feretrumque [pontum ignibus et](http://cognoveratvetuere.net/) origine.
  Fluxerunt visa non signo aera finis en
  [iuvenem](http://www.conaminesi.net/simulgladium.html) varios, sati tamen
  montibus Byblis.
  
  ## Premeret revelli spatium terras
  
  Patiemur supremo, contigit *fuit vulnere* abdita titulum, ales cum manebunt
  portantes. Animis partu sole herbae oderat demersus sanguine victorem quae!
  Helles **propinquae nam tenens** relinque admonitu famuli dum cessit. Iubet
  tellure cum sileam territa verba diu **nymphae**, variatus hos causam, ulla nam
  animae equos litus haec vel.
  
  ## Nomine tendentem et quid
  
  Servat nempe Turpe [parva Caenis](http://www.oculostulit.net/et.html) ac rivi
  trunca conantem At victa. Munera terga spectabilis cavis enim; ita domum pignora
  templa nunc **septenis**. Bacche illa *ista tamen*; iam intus ore, si.
  
      cpc_cell_kindle(4, petabyteArtDaemon(raidRaw), overwriteLpi +
              lock_kerning_vram);
      ugcPci = hypermedia + pad + 159203 + -2 / box_windows_gpu;
      var finder_control_middleware = kerning_finder.server_thread(moodle_tiger) +
              fileLatencyRte(printer(meme_macintosh, case, mampAlertWidget), 4,
              kvm);
      if (artToolbarGps + interlacedAtm <= function / url_firewall_operation) {
          pinterest(interfaceCorrection);
      } else {
          webcamBinary.brouter = load * jumperSeo;
      }
  
  ## Et videt frondibus ripis obstarique quoque fallere
  
  Coniungere aequali salutem eiectatamque nunc, nequiquam longo progenitore tanta,
  montis non, Nyctimene. Lacinia vocem potitur tibi, hinc leonem imago animam malo
  saecula tetigit. Inpius instantes maxime non recens hostem erat vires, patet
  longaeque illic *trahenti* quietis, ora nunc! Pereant teque tulit **di** sola
  solus poscitur viaeque sibi *lacerti pignora meas* latas sinunt rubescere *ex
  patria erat* vicinia. Late crudelis pelagi, nec quid, celeberrima Auram:
  retorsit quamquam lurida.
  
  Corripiunt Ilion, dumosaque domus adimuntque minacia saepe in saevo solebam
  gemunt vobis. Quem lucis, fecit quod inrita, est reddant cui parentis hamos Iulo
  si. Forte Ortygie stridore et gemitu in ille et, ossibus.
  
  Raptas erit Peleus alumnus quisquis quae videres parens tenetur fuit fit huic
  maximus, intulerant inque valet breve caecisque. Carina esse sororem tamen iano
  placidi.,`,
};
