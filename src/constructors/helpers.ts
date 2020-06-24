import { Scene, Entity } from 'aframe';

export function createAndSetAttributes(
  elementName: string,
  attributes: object
): Entity {
  const entity = document.createElement(elementName);
  Object.entries(attributes).forEach(([attributeName, data]) => {
    entity.setAttribute(attributeName, data);
  });
  return entity;
}
