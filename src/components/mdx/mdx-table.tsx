import React from 'react';

export const MDXTable = (props: any) => {
  return (
    <div className="my-8 w-full overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
      <table className="w-full text-sm text-left border-collapse" {...props}>
        {/* The table elements (thead, tbody, tr, th, td) are passed via props.children by MDXRemote */}
      </table>
    </div>
  );
};
