
import { Link } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import Journey from "../components/Journey";

export default function SeoPage({ page }) {
  if (!page) {
    return <p>Page not found.</p>;
  }

  const isBusFoodPage = page.category === "Bus Food";
  const h1Heading = page.h1 || page.name || page.title;

  // Show the top CTA on selected landing pages.
  const showTopCta = [
    "/food/bangalore/",
    "/food/home-chefs/bangalore/",
    "/bus-food/",
    "/bus-food/bangalore/",
    "/bus-food/ksrtc/",
  ].includes(page.url);

  // Default CTA destination.
  const defaultCtaUrl = isBusFoodPage
    ? "/bus-food/bangalore/"
    : "/food/homemade-food/bangalore/";

  // CTA labels.
  const defaultCtaText =
    page.url === "/bus-food/ksrtc/"
      ? "Explore Bus Food Delivery"
      : isBusFoodPage
        ? "Explore Bus Food Bangalore"
        : "Order Food";

  return (
    <>
      {/* SEO metadata */}
      <SeoHead
        title={page.title}
        description={page.description}
        url={page.url}
      />

      {/* Breadcrumb navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        {" / "}

        {page.category && (
          <>
            {page.category}
            {" / "}
          </>
        )}

        <span>{page.name || h1Heading}</span>
      </nav>

      {/* Hero section */}
      <section className="hero">
        <div className="hero-inner">
          <h1>{h1Heading}</h1>

          {/* Intro paragraphs */}
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

          {/* Top CTA */}
          {showTopCta && (
            <div className="top-cta">
              <Link
                className="cta-button top-cta-button"
                to={defaultCtaUrl}
              >
                {defaultCtaText}
              </Link>
            </div>
          )}
        </div>

        {/* Journey component for Bus Food pages */}
        {isBusFoodPage && <Journey />}
      </section>

      {/* Main page content */}
      <section className="content">
        {/* Page-level paragraph */}
        {page.paragraph && <p>{page.paragraph}</p>}

        {/* Page sections */}
        {page.sections?.map((section, index) => (
          <section className="seo-section" key={index}>
            {section.heading && <h2>{section.heading}</h2>}

            {/* Section paragraphs */}
            {section.paragraphs?.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}

            {/* Section CTA */}
            {section.cta && (
              <div className="cta-section">
                <p>{section.cta}</p>
                <Link className="cta-button" to={defaultCtaUrl}>
                  {section.cta}
                </Link>
              </div>
            )}

            {/* Section text */}
            {section.text && <p>{section.text}</p>}

            {/* Section items */}
            {section.items?.map((item, itemIndex) => (
              <div key={item.heading || itemIndex}>
                {item.heading && <h3>{item.heading}</h3>}

                {item.text && <p>{item.text}</p>}

                {item.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}

                {item.bullets?.length > 0 && (
                  <ul className="features">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Subsections with optional images */}
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
                    alt={
                      subsection.image.alt ||
                      subsection.heading ||
                      ""
                    }
                    loading="lazy"
                    width="440"
                    height="300"
                  />
                )}

                <div className="food-row-content">
                  {subsection.heading && (
                    <h3>{subsection.heading}</h3>
                  )}

                  {subsection.paragraphs?.map(
                    (paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    )
                  )}

                  {subsection.text && <p>{subsection.text}</p>}

                  {subsection.bullets?.length > 0 && (
                    <ul className="features">
                      {subsection.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
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

            {/* Section bullet points */}
            {section.bullets?.length > 0 && (
              <ul className="features">
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            )}

            {/* Tables: supports category/examples and food/bestFor formats */}
            {section.table?.length > 0 && (
              <div className="seo-table-wrapper">
                {(() => {
                  const firstRow = section.table[0];

                  const isCategoryTable =
                    firstRow.category !== undefined;

                  const hasWhatToCheck = section.table.some(
                    (row) => row.whatToCheck !== undefined
                  );

                  return (
                    <table className="seo-table">
                      <thead>
                        <tr>
                          {isCategoryTable ? (
                            <>
                              <th scope="col">Food Category</th>
                              <th scope="col">Examples</th>
                            </>
                          ) : (
                            <>
                              <th scope="col">Food</th>
                              <th scope="col">Best For</th>
                            </>
                          )}

                          {hasWhatToCheck && (
                            <th scope="col">What to Check</th>
                          )}
                        </tr>
                      </thead>

                      <tbody>
                        {section.table.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {isCategoryTable ? (
                              <>
                                <td>{row.category ?? "—"}</td>
                                <td>{row.examples ?? "—"}</td>
                              </>
                            ) : (
                              <>
                                <td>{row.food ?? "—"}</td>
                                <td>{row.bestFor ?? "—"}</td>
                              </>
                            )}

                            {hasWhatToCheck && (
                              <td>{row.whatToCheck ?? "—"}</td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  );
                })()}
              </div>
            )}

            {/* Section images */}
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

      {/* Bottom CTA */}
      {page.cta && (
        <section className="content cta-section">
          <h2>{page.cta.heading}</h2>
          <p>{page.cta.text}</p>

          <Link
            className="cta-button"
            to={page.cta.url || defaultCtaUrl}
          >
            {page.cta.buttonText || defaultCtaText}
          </Link>
        </section>
      )}
    </>
  );
}
