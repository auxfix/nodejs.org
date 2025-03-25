import type { FC, PropsWithChildren } from 'react';

import { getClientContext } from '@/client-context';
import WithFooter from '@/components/withFooter';
import WithNavBar from '@/components/withNavBar';

import styles from './layouts.module.css';
import '@/styles/simplified-download.css';

/**
 * This layout is designed to be completely static after build
 * It should not depend on client-side JavaScript to render
 * All data is fetched and rendered at build time only
 */
const DownloadSimpleLayout: FC<PropsWithChildren> = async ({ children }) => {
  // Get frontmatter data at build time only
  const { frontmatter } = getClientContext();

  return (
    <>
      {/* These components should be static after the build */}
      <WithNavBar />

      <div className={styles.downloadLayout}>
        <main>
          <h1>{frontmatter.title}</h1>
          {/* No client-side hydration needed for this content */}
          <div>{children}</div>
        </main>
      </div>

      <WithFooter />
    </>
  );
};

export default DownloadSimpleLayout;
