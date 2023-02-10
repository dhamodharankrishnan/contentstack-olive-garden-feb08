import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import RenderClassicComponents from "../components/render-classic-components";
import { getClassicAllEntries } from "../helper";
import Skeleton from "react-loading-skeleton";
import { classicEntry, Prop } from "../typescript/pages";
import { useLivePreviewCtx } from "../context/live-preview-context-provider";

export default function Listing({ entry }: Prop) {
  const lpTs = useLivePreviewCtx();
  const params = useParams();
  const entryUrl = params.page ? `/${params.page}` : "/";
  const history = useNavigate();
  const [getClassicEntries, setClassicEntries] = useState({} as classicEntry);
  const [error, setError] = useState(false);

  async function fetchListingData() {
    try {
      const result = await getClassicAllEntries();
      !result && setError(true);
      setClassicEntries({ ...result });
      entry({ classicEntries: result });
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchListingData();
    error && history("/404");
  }, [entryUrl, lpTs, error]);

  return Object.keys(getClassicEntries).length ? (
    
    <RenderClassicComponents
      classicData={getClassicEntries}
    />
  ) : (
    <Skeleton count={5} height={400} />
  );
}
