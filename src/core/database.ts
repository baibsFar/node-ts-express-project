import { DataSource, DataSourceOptions } from 'typeorm'

export const createDataSource = (options: DataSourceOptions) => {
    const dataSource = new DataSource(options)
    return dataSource
}

export const activateDatabase = async (appDataSource: DataSource) => {
    appDataSource.initialize()
        .then(() => console.log('[DATABASE] -> CONNECTION INITIALIZED'))
        .catch(err => console.error('[DATABASE] -> %s', err))
}