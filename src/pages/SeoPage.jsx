import { Link } from "react-router-dom";

import SeoHead from "../components/SeoHead";

import Journey from "../components/Journey";

export default function SeoPage({ page }) {

  if (!page) {

    return <p>Page not found.</p>;

  }

  const isBusFoodPage = page.category === "Bus Food";

  const isBusTicketsPage = page.url === "/bus/bangalore/";

  const h1Heading = page.h1 || page.name || page.title;

  // Show the top CTA only on selected landing pages.

  const showTopCta = [
  "/food/bangalore/",
  "/food/home-chefs/bangalore/",
  "/bus-food/",
  "/bus-food/bangalore/",
  "/bus-food/ksrtc/",
  "/bus/bangalore/",
].includes(page.url);

  // Page-specific CTA destinations.

  const defaultCtaUrl = isBusTicketsPage

    ? "/bus/bangalore/booking/"

    : isBusFoodPage

      ? "/bus-food/bangalore/"

      : "/food/homemade-food/bangalore/";

  // Page-specific CTA labels.

  const defaultCtaText = isBusTicketsPage

    ? "Explore Bus Travel Options"

    : page.url === "/bus-food/ksrtc/"

      ? "Explore Bus Food Delivery"

      : isBusFoodPage

        ? "Explore Bus Food Bangalore"

        : "Order Food";

  // Reusable image gallery.

  const renderImages = (images, className = "seo-images") => {

    if (!images?.length) return null;

    return (

      <div className={className}>

        {images.map((image, index) => (

          <figure

            className="seo-image-card"

            key={image.src || index}

          >

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

    );

  };

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

            {section.cta && !isBusTicketsPage && (

              <div className="cta-section">

                <p>{section.cta}</p>

                <Link

                  className="cta-button"

                  to={section.ctaUrl || defaultCtaUrl}

                >

                  {section.cta}

                </Link>

              </div>

            )}

            {section.text && <p>{section.text}</p>}

            {/* Generic section items */}

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

            {/* FAQs inside a section */}

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

            {/* Tables: bus routes, food categories, and food comparisons */}

            {section.table?.length > 0 && (

              <div className="seo-table-wrapper">

                {(() => {

                  const firstRow = section.table[0];

                  const isBusRouteTable =

                    firstRow.details !== undefined ||

                    section.heading === "Popular Bus Routes from Bangalore";

                  const isCategoryTable =

                    !isBusRouteTable &&

                    firstRow.category !== undefined;

                  const hasWhatToCheck = section.table.some(

                    (row) => row.whatToCheck !== undefined

                  );

                  return (

                    <table className="seo-table">

                      <thead>

                        <tr>

                          {isBusRouteTable ? (

                            <>

                              <th scope="col">Bus Route</th>

                              <th scope="col">Journey Details</th>

                            </>

                          ) : isCategoryTable ? (

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

                            {isBusRouteTable ? (

                              <>

                                <td>{row.category ?? "—"}</td>

                                <td>{row.details ?? "—"}</td>

                              </>

                            ) : isCategoryTable ? (

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

            {/* Images belonging to an individual section */}

            {renderImages(section.images)}

          </section>

        ))}

      </section>

      {/* Page-level image gallery */}

      {page.images?.length > 0 && (

        <section className="content">

          {renderImages(

            page.images,

            "seo-images seo-page-image-gallery"

          )}

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

              <li key={link.url || index}>

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

              <div className="faq-item" key={faq.question || index}>

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

          {page.cta.heading && <h2>{page.cta.heading}</h2>}

          {page.cta.text && <p>{page.cta.text}</p>}

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
