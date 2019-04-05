using Litium.FieldFramework;
using System.Collections.Generic;
using System.Linq;

namespace Litium.Accelerator.FieldTypes
{
    public class StringFieldType : FieldTypeBase
    {
        public override object GetValue(ICollection<FieldData> fieldDatas) => fieldDatas.FirstOrDefault()?.TextValue;
        public override ICollection<FieldData> PersistFieldData(object item) => PersistFieldDataInternal(item);
        protected override ICollection<FieldData> PersistFieldDataInternal(object item) => new[] { new FieldData { TextValue = (string)item } };
    }
}
