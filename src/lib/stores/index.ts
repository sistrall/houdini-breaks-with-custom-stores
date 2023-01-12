import { QueryStore, type GraphQLObject } from '$houdini';

export class CustomQueryStore<
	_Data extends GraphQLObject,
	_Input extends object,
	_ExtraFields = object
> extends QueryStore<_Data, _Input, _ExtraFields> {}
