import callTsApi from '../utils/callTsApi';

export function getConnections({query = '', limit = 10, page = 0, connectionType = ''}) {
	return callTsApi(`/v4/proxy/network/connections?limit=${limit}&page=${page}&type=${connectionType}&omitConnections=false`)
		.then(response => response.data);
}
