import '../../../styles/components/typography.scss';

export default function KitchenSink() {
  return (
    <main className="p-8">
      <div className="container">
        <h1 className="heading--xl mb-6">Kitchen Sink</h1>

        <hr className="mb-6" />
        <h2 className="heading mb-6">Typography</h2>
        <section className="mb-6">

            <div className="heading--s mb-2">.heading--s</div>
            <div className="heading mb-2">.heading</div>
            <div className="heading--l mb-2">.heading--l</div>
            <div className="heading--xl mb-2">.heading--xl</div>

            <div className="subheading--s mb-2">.subheading--s</div>
            <div className="subheading mb-2">.subheading</div>
            <div className="subheading--l mb-2">.subheading--l</div>

            <div className="eyebrow mb-2">.eyebrow</div>

            <div className="body--xs mb-2">.body--xs</div>
            <div className="body--s mb-2">.body--s</div>
            <div className="body mb-2">.body</div>
            <div className="body--l mb-2">.body--l</div>
            <div className="body--xl mb-2">.body--xl</div>

        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-6">Layout</h2>
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
        <h2 className="heading mb-4">Color Palette</h2>
        <section className="mb-6">
          <div className="row">
            <div className="col">
              <div className="box bg-primary text-white">
                <div className="subheading--s">.bg-primary</div>
                <div className="body">.text-white</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-secondary text-accent">
                <div className="subheading--s">.bg-secondary</div>
                <div className="body">.text-accent</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-dark text-light">
                <div className="subheading--s">.bg-dark</div>
                <div className="body">.text-light</div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <div className="box bg-white text-primary">
                <div className="subheading--s">.bg-white</div>
                <div className="body">.text-primary</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-accent text-secondary">
                <div className="subheading--s">.bg-accent</div>
                <div className="body">.text-secondary</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-light text-dark">
                <div className="subheading--s">.bg-light</div>
                <div className="body">.text-dark</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
