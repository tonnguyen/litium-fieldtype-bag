using Litium.FieldFramework;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Litium.Accelerator.FieldTypes.ColorField
{
    class TriStateBooleanFieldTypeMetadata : FieldTypeMetadataBase
    {
        public override string Id => "TriStateBoolean";
        public override bool CanBeGridColumn => true;
        public override bool CanBeGridFilter => false;
        public override bool CanSort => false;
        public override Type JsonType => typeof(string);
        public override IFieldType CreateInstance(IFieldDefinition fieldDefinition)
        {
            var item = new BooleanFieldType();
            item.Init(fieldDefinition);
            return item;
        }
    }

    public class BooleanFieldType : FieldTypeBase
    {
        public override object GetValue(ICollection<FieldData> fieldDatas) => fieldDatas.FirstOrDefault()?.BooleanValue;
        public override ICollection<FieldData> PersistFieldData(object item) => PersistFieldDataInternal(item);
        protected override ICollection<FieldData> PersistFieldDataInternal(object item)
        {
            if (item is bool result || bool.TryParse((string)item, out result))
            {
                return new[] { new FieldData { BooleanValue = result } };
            }
            return new[] { new FieldData { BooleanValue = null } };
        }
    }
}
