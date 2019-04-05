using Litium.FieldFramework;
using System;

namespace Litium.Accelerator.FieldTypes.ColorField
{
    class ColorFieldTypeMetadata : FieldTypeMetadataBase
    {
        public override string Id => "ColorField";
        public override bool CanBeGridColumn => true;
        public override bool CanBeGridFilter => false;
        public override bool CanSort => false;
        public override Type JsonType => typeof(string);
        public override IFieldType CreateInstance(IFieldDefinition fieldDefinition)
        {
            var item = new StringFieldType();
            item.Init(fieldDefinition);
            return item;
        }
    }
}
