import callTsApi from '../utils/callTsApi';

export function getConnections({query, limit, page, type}) {
	return callTsApi(`/v4/proxy/network/connections?limit=${limit}&page=${page}&type=${type}&omitConnections=${query}`)
		.then(response => response.data);
}
