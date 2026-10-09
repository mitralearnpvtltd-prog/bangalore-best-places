
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
      <SeoHead
        title={page.title}
        description={page.description}
        url={page.url}
      />

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link> / {page.category} /{" "}
        <span>{page.name}</span>
      </nav>

      <section className="hero">
        <div className="hero-inner">
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

      <section className="content">
        {page.sections?.map((section, index) => (
          <section className="seo-section" key={index}>
            <h2>{section.heading}</h2>

            {/* Display section paragraphs */}
            {section.paragraphs?.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}

            {/* Display a single section text */}
            {section.text && <p>{section.text}</p>}

            {/* Display section items */}
            {section.items?.length > 0 && (
              <div className="seo-items">
                {section.items.map((item, itemIndex) => (
                  <div className="seo-item" key={itemIndex}>
                    <h3>{item.heading}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Display bullet points */}
            {section.bullets?.length > 0 && (
              <ul className="features">
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            )}

            {/* Display tables */}
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

            {/* Display section images */}
            {section.images?.length > 0 && (
              <div className="seo-images">
                {section.images.map((image, imageIndex) => (
                  <figure key={imageIndex}>
                    <img
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

      {/* Display page-level images */}
      {page.images?.length > 0 && (
        <section className="content seo-images">
          {page.images.map((image, index) => (
            <figure key={index}>
              <img
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

      {/* Display internal links */}
      {page.internalLinks?.length > 0 && (
        <section className="content">
          <h2>
            {page.internalLinksHeading || "Explore Related Pages"}
          </h2>

          <ul className="related">
            {page.internalLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Display FAQs */}
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

      {/* Display call-to-action */}
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