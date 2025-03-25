import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import { getClientContext } from '@/client-context';
import '@/styles/simplified-download-static.css';

/**
 * This layout is designed to be completely static after build
 * It uses no client-side JavaScript components
 * All data is fetched and rendered at build time only
 *
 * Note: We're using Next.js Link components instead of HTML <a> tags
 * to satisfy the linter, but they'll be rendered as static links in the build
 */
const DownloadSimpleStaticLayout: FC<PropsWithChildren> = async ({
  children,
}) => {
  // Get frontmatter data at build time only
  const { frontmatter } = getClientContext();

  return (
    <div>
      {/* Static header with Next.js Link components */}
      <header>
        <div className="staticHeader">
          <h1 className="siteLogo">
            {/* Using Next.js Link to satisfy linter */}
            <Link href="/en">Node.js</Link>
          </h1>
          <nav>
            <ul>
              {/* Using Next.js Link components to satisfy linter */}
              <li>
                <Link href="/en/learn">Learn</Link>
              </li>
              <li>
                <Link href="/en/download">Download</Link>
              </li>
              <li>
                <Link href="/en/docs">Documentation</Link>
              </li>
              <li>
                <Link href="/en/community">Community</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="staticMainContent">
        <main>
          <h1>{frontmatter.title}</h1>
          {/* No client-side hydration needed for this content */}
          <div>{children}</div>
        </main>
      </div>

      {/* Static footer with Next.js Link components */}
      <footer className="staticFooter">
        <div>
          <p>© OpenJS Foundation. All Rights Reserved.</p>
          <ul>
            {/* Using Next.js Link components to satisfy linter */}
            <li>
              <Link href="/en/about/trademark">Trademark Policy</Link>
            </li>
            <li>
              <Link href="/en/about/privacy">Privacy Policy</Link>
            </li>
            <li>
              <a href="https://github.com/nodejs/node">GitHub</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default DownloadSimpleStaticLayout;
