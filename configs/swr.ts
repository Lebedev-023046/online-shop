export const fetcher = (...args: unknown[]): Promise<any> => {
  return fetch(...(args as [RequestInfo, RequestInit?])).then(res =>
    res.json(),
  );
};
