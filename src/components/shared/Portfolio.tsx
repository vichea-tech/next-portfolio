import React from 'react';
import Image from 'next/image';
import styles from '@/styles/modules/Portfolio.module.scss';
import Link from 'next/link';
import { FiLink as LinkIcon } from 'react-icons/fi';
import { UrlObject } from 'url';
import classNames from 'classnames';

type Props = {
  imageUrl: string;
  category: string;
  title: string;
  href: string | UrlObject;
};

const Portfolio = ({ imageUrl, category, title, href }: Props) => {
  return (
    <div className={classNames(styles['portfolio'], 'bg-white dark:bg-gray-700 flex-none')}>
      <Image 
        src={imageUrl} 
        height={1080} 
        width={1920} 
        priority
        alt={title} 
      />
      <div className={styles['portfolio-overlay']}>
        <span className={styles['portfolio-category']}>{category}</span>
        <Link href={href} legacyBehavior>
          <a className={styles['portfolio-title']}>{title}</a>
        </Link>
        <Link href={href} legacyBehavior>
          <a className={styles['portfolio-link']}>
            <LinkIcon className="h-5 text-white" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
