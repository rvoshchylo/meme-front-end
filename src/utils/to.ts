export async function to<T, E = Error>(
  promise: Promise<T>,
): Promise<[E, null] | [null, T]> {
  try {
    const data = await promise;

    return [null, data];
  } catch (err) {
    return [err as E, null];
  }
}
