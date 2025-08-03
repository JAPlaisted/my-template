import '../../../styles/components/typography.scss';
import '../../../styles/pages/kitchen-sink.scss';
import MediaBlock from './../components/media-block';

const mediaBlockData = {
    imageUrl: 'https://picsum.photos/1200',
    eyebrow: 'Media Block',
    heading: 'This is a media block',
    body: 'I have an image on the left and text on the right. I also have one button.',
    isReversed: false,
    buttons: [
      {
        label: 'Lorem ipsum',
        link: '/',
        theme: 'btn-primary',
      },
    ],
};

const mediaBlockData2 = {
    imageUrl: 'https://picsum.photos/600',
    eyebrow: 'Media Block',
    heading: 'This is a reversed media block',
    body: 'I have the image on the right and text on the left using {isReversed: true}. I also have two buttons.',
    isReversed: true,
    buttons: [
      {
        label: 'Lorem ipsum',
        link: '/',
        theme: 'btn-primary',
      },
      {
        label: 'Lorem ipsum',
        link: '/',
        theme: 'btn-secondary--outline',
      },
    ],
};

export default function KitchenSink() {
  return (
    <main className="p-8">
      <div className="container">
        <h1 className="heading--xl mb-6">Kitchen Sink</h1>

        <hr className="mb-6" />
        <h3 className="eyebrow mb-4 text-primary">Elements</h3>
        <h2 className="heading--l mb-6">Typography</h2>
        <section className="mb-6">

            <div className="heading--s mb-4">.heading--s</div>

            <div className="heading mb-4">.heading</div>

            <div className="heading--l mb-4">.heading--l</div>

            <div className="heading--xl mb-4">.heading--xl</div>

            <div className="subheading--s mb-4">.subheading--s</div>

            <div className="subheading mb-4">.subheading</div>

            <div className="subheading--l mb-4">.subheading--l</div>

            <div className="eyebrow mb-4">.eyebrow</div>

            <div className="body--xs mb-2">.body--xs</div>
            <div className="body--xs mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <div className="body--s mb-2">.body--s</div>
            <div className="body--s mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <div className="body mb-2">.body</div>
            <div className="body mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <div className="body--l mb-2">.body--l</div>
            <div className="body--l mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <div className="body--xl mb-2">.body--xl</div>
            <div className="body--xl mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <a className="mb-2" href='/'>links</a>
            <div className="body mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. <a href='/'>Quae laboriosam</a> sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

        </section>

        <hr className="mb-6" />
        <h2 className="heading--l mb-6">Layout</h2>
        <section className="mb-6">
            <div className="box">
                <div className="eyebrow">Typography Sample</div>
                <div className="heading">Inside a Box</div>
                <div className="body mt-2">This content is wrapped in a <code>.box</code> inside a <code>.container</code>.</div>
            </div>

            <div className="row mt-8">
                <div className="col">
                    <div className="box">
                        <div className="subheading--s">Left Column</div>
                        <div className="body">This is a 50% column on desktop, 100% on mobile.</div>
                    </div>
                </div>

                <div className="col">
                    <div className="box">
                        <div className="subheading--s">Right Column</div>
                        <div className="body">You can nest any components inside these columns.</div>
                    </div>
                </div>
            </div>
        </section>

        <hr className="mb-6" />
        <h2 className="heading--l mb-4">Color Palette</h2>
        <section className="mb-6">
          <div className="row">
            <div className="col">
              <div className="box bg-primary text-white">
                <div className="heading--s">.bg-primary</div>
                <div className="body">.text-white</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-white text-primary">
                <div className="heading--s">.bg-white</div>
                <div className="body">.text-primary</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-secondary text-accent">
                <div className="heading--s">.bg-secondary</div>
                <div className="body">.text-accent</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-accent text-secondary">
                <div className="heading--s">.bg-accent</div>
                <div className="body">.text-secondary</div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <div className="box bg-dark text-light">
                <div className="heading--s">.bg-dark</div>
                <div className="body">.text-light</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-light text-dark">
                <div className="heading--s">.bg-light</div>
                <div className="body">.text-dark</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Responsive Mixins</h2>
        <section className="mb-12">
            <div className="responsive-box">
                <div className="body">
                    Resize your browser to see this box change color.
                </div>
                <div className="body--s mt-2">
                    <strong>{"@include mobile {"}</strong> background-color: $white; border-color: $tropicalIndigo;<strong>{"}"}</strong><br />
                    <strong>{"@include desktop {"}</strong> background-color: $honeydew; border-color: $oxfordBlue;<strong>{"}"}</strong><br />
                </div>
            </div>
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Buttons</h2>
        <section className="mb-12">
            <div className="row">
                <div className="col">
                    <div className="body--s mb-2">.btn-primary</div>
                    <button className="button btn--s btn-primary">Small</button>{' '}
                    <button className="button btn btn-primary">Default</button>{' '}
                    <button className="button btn--l btn-primary">Large</button>
                </div>
                <div className="col">
                    <div className="body--s mb-2">.btn-secondary</div>
                    <button className="button btn--s btn-secondary">Small</button>{' '}
                    <button className="button btn btn-secondary">Default</button>{' '}
                    <button className="button btn--l btn-secondary">Large</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="body--s mb-2">.btn-primary--outline</div>
                    <button className="button btn--s btn-primary--outline">Small</button>{' '}
                    <button className="button btn btn-primary--outline">Default</button>{' '}
                    <button className="button btn--l btn-primary--outline">Large</button>
                </div>
                <div className="col">
                    <div className="body--s mb-2">.btn-secondary--outline</div>
                    <button className="button btn--s btn-secondary--outline">Small</button>{' '}
                    <button className="button btn btn-secondary--outline">Default</button>{' '}
                    <button className="button btn--l btn-secondary--outline">Large</button>
                </div>
            </div>
        </section>

        <hr className="mb-6" />
        <h3 className="eyebrow mb-4 text-primary">Components</h3>
        <h2 className="heading mb-4">Media Block</h2>
        <section className="mb-12">
          <MediaBlock {...mediaBlockData} />
          <MediaBlock {...mediaBlockData2} />
        </section>
      </div>
    </main>
  );
}
