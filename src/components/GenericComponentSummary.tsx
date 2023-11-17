import React from 'react'

interface SummaryProps<T extends object, K extends keyof T> {
  data: T;
  property: K;
}

const GenericComponentSummary = <T extends object, K extends keyof T>({
  data,
  property,
}: SummaryProps<T, K>) => {
  const value = data[property] as string;

  return (
    <div>
      {(typeof property === "string") ? (
        <p>
          {property}: {value}{" "}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default GenericComponentSummary
