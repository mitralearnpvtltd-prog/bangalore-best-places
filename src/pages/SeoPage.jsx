
import { Link } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import Journey from "../components/Journey";

export default function SeoPage({ page }) {
  if (!page) {
    return <p>Page not found.</p>;
  }

  const isBusFoodPage = page.category === "Bus Food";
  const h1Heading = page.h1 || page.name || page.title;

  return (
    <>
      {/* SEO metadata: browser title and description */}
      <SeoHead
        title={page.title}
        description={page.description}
        url={page.url}
      />

      {/* Breadcrumb navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        {" / "}
        {page.category && <>{page.category}{" / "}</>}
        <span>{page.name || h1Heading}</span>
      </nav>

      {/* Hero section */}
      <section className="hero">
        <div className="hero-inner">
          {/* Visible H1 heading, independent of browser title */}
          <h1>{h1Heading}</h1>

          {page.intro && (
            <div className="seo-intro">
              {Array.isArray(page.intro) ? (
                page.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{page.intro}</p>
              )}
            </div>
          )}
        </div>

        {isBusFoodPage && <Journey />}
      </section>

      {/* Main page content */}
      <section className="content">
        {page.sections?.map((section, index) => (
          <section className="seo-section" key={index}>
            <h2>{section.heading}</h2>

            {/* Section paragraphs */}
            {section.paragraphs?.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}

            {/* Section call to action */}
            {section.cta && (
              <div className="cta-section">
                <p>{section.cta}</p>
                <Link
                  className="cta-button"
                  to="/food/homemade-food/bangalore/"
                >
                  Explore Homemade Food
                </Link>
              </div>
            )}

            {section.text && <p>{section.text}</p>}

            {/* Subsections with alternating images */}
            {section.subsections?.map((subsection, subsectionIndex) => (
              <div
                className={
                  subsection.image
                    ? `food-row ${
                        subsectionIndex % 2 === 1
                          ? "food-row-reverse"
                          : ""
                      }`
                    : "food-row food-row-text-only"
                }
                key={subsection.heading || subsectionIndex}
              >
                {subsection.image && (
                  <img
                    className="seo-food-image"
                    src={subsection.image.src}
                    alt={subsection.image.alt || subsection.heading || ""}
                    loading="lazy"
                    width="440"
                    height="300"
                  />
                )}

                <div className="food-row-content">
                  {subsection.heading && <h3>{subsection.heading}</h3>}

                  {subsection.paragraphs?.map(
                    (paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    )
                  )}

                  {subsection.text && <p>{subsection.text}</p>}
                </div>
              </div>
            ))}

            {/* Section FAQs */}
            {section.faqs?.map((faq, faqIndex) => (
              <div key={faq.question || faqIndex}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}

            {/* Bullet points */}
            {section.bullets?.length > 0 && (
              <ul className="features">
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            )}

            {/* Tables */}
            {section.table?.length > 0 && (
              <div className="seo-table-wrapper">
                <table className="seo-table">
                  <thead>
                    <tr>
                      {section.table[0]?.category !== undefined ? (
                        <>
                          <th>Food Category</th>
                          <th>Examples</th>
                        </>
                      ) : (
                        <>
                          <th>Food</th>
                          <th>Best For</th>
                        </>
                      )}
                    </tr>
                  </thead>

                  <tbody>
                    {section.table.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.category !== undefined ? (
                          <>
                            <td>{row.category}</td>
                            <td>{row.examples}</td>
                          </>
                        ) : (
                          <>
                            <td>{row.food}</td>
                            <td>{row.bestFor}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Section images not attached to subsections */}
            {section.images?.length > 0 && (
              <div className="seo-images">
                {section.images.map((image, imageIndex) => (
                  <figure key={imageIndex}>
                    <img
                      className="seo-gallery-image"
                      src={image.src}
                      alt={image.alt || ""}
                      loading="lazy"
                    />

                    {image.caption && (
                      <figcaption>{image.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Fallback for pages without sections */}
        {!page.sections?.length && page.paragraph && (
          <section className="seo-section">
            <h2>{page.contentHeading || page.name}</h2>
            <p>{page.paragraph}</p>
          </section>
        )}
      </section>

      {/* Page-level images */}
      {page.images?.length > 0 && (
        <section className="content seo-images">
          {page.images.map((image, index) => (
            <figure key={index}>
              <img
                className="seo-gallery-image"
                src={image.src}
                alt={image.alt || ""}
                loading="lazy"
              />

              {image.caption && (
                <figcaption>{image.caption}</figcaption>
              )}
            </figure>
          ))}
        </section>
      )}

      {/* Related internal links */}
      {page.relatedLinks?.length > 0 && (
        <section className="content">
          <h2>
            {page.internalLinksHeading || "Explore Related Pages"}
          </h2>

          <ul className="related">
            {page.relatedLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Page-level FAQs */}
      {page.faqs?.length > 0 && (
        <section className="content">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-list">
            {page.faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Page-level call to action */}
      {page.cta && (
        <section className="content cta-section">
          <h2>{page.cta.heading}</h2>
          <p>{page.cta.text}</p>

          {page.cta.url ? (
            <Link className="cta-button" to={page.cta.url}>
              {page.cta.buttonText}
            </Link>
          ) : (
            <button className="cta-button" type="button">
              {page.cta.buttonText}
            </button>
          )}
        </section>
      )}
    </>
  );
}
