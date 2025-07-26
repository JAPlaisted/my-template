import '../../../styles/components/typography.scss';

export default function KitchenSink() {
  return (
    <main className="p-8">
      <h1 className="heading--xl">Kitchen Sink</h1>

      <h2 className="heading">Typography</h2>
      <section className="space-y-4">
        <div className="heading--s">.heading--s</div>
        <div className="heading">.heading</div>
        <div className="heading--l">.heading--l</div>

        <div className="subheading--s">.subheading--s</div>
        <div className="subheading">.subheading</div>
        <div className="subheading--l">.subheading--l</div>

        <div className="eyebrow">.eyebrow</div>

        <div className="body--xs">.body--xs</div>
        <div className="body--s">.body--s</div>
        <div className="body">.body</div>
        <div className="body--l">.body--l</div>
        <div className="body--xl">.body--xl</div>
      </section>
    </main>
  );
}
